const express = require('express')
const api = express.Router()
const iotDataCtrl = require('../controllers/iotData.controller')

api.get('/api/data', iotDataCtrl.getIotData)
api.post('/api/databyuser', iotDataCtrl.getIotDataByUser)
api.post('/api/data', iotDataCtrl.createIotData)
api.delete('/api/data/:id', iotDataCtrl.deleteIotData)

module.exports = api