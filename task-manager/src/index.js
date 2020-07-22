const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('App Listen ' + port)
})

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET request are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(300).send('Site is currently down. Check back soon!')
//     next()
// })

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5ccc5614ffde092fac63681e')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     // const user = await User.findById('5ccc5592ffde092fac63681b')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }
// main()
// const pet = {
//     name: "Tony"
// }

// pet.toJSON = function () {
//     console.log(this)
//     return this
// }

// console.log(JSON.stringify(pet))

// const test = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thanosmuere', { expiresIn: '5 seconds' })
//     console.log(token)
//     const data = jwt.verify(token, 'thanosmuere')
//     console.log(data)

//     // const password = 'abc'
//     // const hashedPassword = await bcrypt.hash(password, 8)
//     // console.log(password)
//     // console.log(hashedPassword)
//     // const isMatch = await bcrypt.compare('abc', hashedPassword)
//     // console.log(isMatch)
// }

// test()