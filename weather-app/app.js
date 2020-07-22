const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// const url = 'https://api.darksky.net/forecast/702f63af40904bb2dbb2026320ae7789/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const data = response.body.currently
//         console.log("It is currently " + data.temperature + " degrees out. There is a " + data.precipProbability + "% change of rain")
//     }
// })

/********************* */

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2luZ2FyYSIsImEiOiJjanYyaXhxOTQyNW1wM3lwZnBxZWFyNTdzIn0.jdtqGVfFwKQhYKFEas34dQ'

// request({ url: url2, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.features.lenght === 0) {
//         console.log('Unable to find location. Try another search')
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })

/*************************** */

const address = process.argv[2]
//console.log(process.argv)

if (!address) {
    console.log('Please provide and  address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log('Error', error)
        }
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                console.log('Error', error)
            }
            console.log(location)
            console.log(forecastdata)
        })
    })
}

/************************* */





