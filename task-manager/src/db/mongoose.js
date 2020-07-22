const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then((sucess) => {
    console.log('console')
}).catch((error) => {
    console.log('Error', error)
})