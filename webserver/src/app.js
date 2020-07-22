const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast.js')
const geocode = require('./utils/geocode.js')

console.log(path.join(__filename))
console.log(path.join(__dirname, '../public'))

const app = express()

const port = process.env.PORT || 3000

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory of server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: "Singara Gonzales"
    })
})

app.get('/about', (req, res) => {
    res.render('About', {
        title: 'About me',
        name: "Singara gonzales"
    })
})

app.get('/help', (req, res) => {
    res.render('Help', {
        title: 'Help',
        helpText: 'This is some helpful text',
        name: "Singara gonzales"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: "Singara gonzales",
        errorMessage: 'Help page not found'
    })
})

// app.get('*', (req, res) => {
//     res.render('404', {
//         title: '404',
//         name: "Singara gonzales",
//         errorMessage: 'page not found'
//     })
// })

//app.com
//app.com/help
//app.com/about

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query);
    res.send({
        products: []
    })
})

app.get('geocode', (req, res) => {

})

app.listen(port, () => {
    console.log('Server is up on port' + port)
})