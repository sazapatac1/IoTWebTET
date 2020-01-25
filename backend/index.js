'use strict'
const express = require('express')
const morgan = require('morgan')
const cors = require('cors');

const {mongoose} = require('./database')

const app = express()
// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use(require('./routes/user.routes'))
app.use(require('./routes/iotData.routes'))

//start server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'))
});