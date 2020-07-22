const fs = require('fs');

// const book = {
//     title: 'Whatever it takes',
//     author: 'Captain America'
// }
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)
// fs.writeFileSync('1-json.json', bookJSON)


/******************************* */

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)

/* CHALLENGE */

//load and parse data
const loadData = fs.readFileSync('1-json.json')
const dataJson = loadData.toString()
const user = JSON.parse(dataJson)

//change name and age property using info
user.name = 'Singaraaaaa'
user.age = 22

//stringify the changes info and overwrite the original data
const userJson = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJson)

