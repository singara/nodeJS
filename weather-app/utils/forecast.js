const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/702f63af40904bb2dbb2026320ae7789/' + lat + ',' + long
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, "It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% change of rain")
        }
    })
}


module.exports = forecast