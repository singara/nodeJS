//CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')
//const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(error)
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ccad501509f5b21a4ad480b")
    // }, {
    //         $set: {
    //             name: "Mikeee"
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // db.collection('users').updateMany({
    //     name: "Andrew"
    // }, {
    //         $set: {
    //             name: "Andrewww"
    //         }
    //     }).then((result) => {
    //         console.log(result.modifiedCount)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    /******************************* */

    // db.collection('users').deleteOne({
    //     name: 'Singara'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     name: 'Andrewww'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    /*************************** */

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Andrew',
    //         age: 27
    //     },
    //     {
    //         name: 'Singara',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents.')
    //     }
    //     console.log(result.ops)
    // })

    // /********************* */

    // db.collection('users').findOne({ name: 'Singara', age: 2 }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to insert documents.')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }, (error, users) => {
    //     if (error) {
    //         return console.log('Unable to insert documents.')
    //     }
    //     console.log(users)
    // })
})
