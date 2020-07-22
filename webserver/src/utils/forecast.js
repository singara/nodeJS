const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/702f63af40904bb2dbb2026320ae7789/' + lat + ',' + long + ''
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined, "It is currently " + body.currently.temperature + " degrees out. This high today is " + body.daily.data[0].temperatureHigh + " with a low of " + body.daily.data[0].temperatureLow + ". There is a " + body.currently.precipProbability + "% change of rain")
        }
    })
}

module.exports = forecast