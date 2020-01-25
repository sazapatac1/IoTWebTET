'use strict'

//importando mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const iotDataSchema = new Schema({
    temperature: {type: Number, required: true},
    humidity:    {type: Number, required: true},
    latitude:    {type: Number, required: true},
    altitude:    {type: Number, required: true}
})

module.exports = mongoose.model('IotData',iotDataSchema)