const express = require('express')
const api = express.Router()
const iotDataCtrl = require('../controllers/iotData.controller')
const auth = require('../middlewares/auth')

api.get('/api/data', iotDataCtrl.getIotData)
api.post('/api/databyuser',auth, iotDataCtrl.getIotDataByUser)
api.post('/api/data', iotDataCtrl.createIotData)
api.delete('/api/data/:id', iotDataCtrl.deleteIotData)

module.exports = api