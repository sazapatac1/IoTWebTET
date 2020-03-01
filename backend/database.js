const mongoose = require('mongoose')

const URI = 'mongodb://database:27017/iotwebtet_DB'
//const URI = 'mongodb://localhost:27017/iotwebtet_DB'
// database in Atlas
//const URI = 'mongodb+srv://sazapatac1:ofM2upbV96tCY9EJ@iotwebtetcluster-c4zmi.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err))

module.exports = {
    mongoose,
    TOKEN_SECRET: process.env.TOKEN_SECRET || "tokeniotwebtetsecreto"
}