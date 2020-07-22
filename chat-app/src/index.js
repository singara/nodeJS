const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage, generateLocation } = require('./utils/mesagges')
const { getUser, getUserInRoom, removeUser, addUser } = require('./utils/users')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//let count = 0

app.on('connection', (socket) => {
    console.log('New WebSocket Connection')

    socket.on('join', ({ username, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, username, room })
        if (error) {
            return callback(error)
        }
        socket.join(user.room)
        socket.emit('message', generateMessage('Admin', 'Welcome!'))
        socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has join`))
        app.to(user.room).emit('roomData', {
            room: user.room,
            users: getUserInRoom(user.room)
        })

        callback()

        //socket.emit, app.emit, socket.broadcast.emit
        //app.to.emit, socket.broadcast.emit
    })

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()
        const user = getUser(socket.id)
        if (filter.isProfane(message)) {
            return callback('Profanity is not allow')
        }

        app.to(user.room).emit('message', generateMessage(user.username, message))
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        const user = getUser(socket.id)
        app.to(user.room).emit('locationMessage', generateLocation(user.username, `https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        callback()
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if (user) {
            app.to(user.room).emit('message', generateMessage('Admin', `${user.username} has disconnected`))
            app.to(user.room).emit('roomData', {
                room: user.room,
                users: getUserInRoom(user.room)
            })
        }
    })

    // socket.emit('countUpdated', count)
    // socket.on('increment', () => {
    //     count++
    //     //socket.emit('countUpdated', count)
    //     app.emit('countUpdated', count)
    // })

})

server.listen(port, () => {
    console.log(`port listen on ${port}`)
})