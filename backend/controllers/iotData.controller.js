const IotData = require('../models/iotData')
const iotDataCtrl = {}

iotDataCtrl.getIotData = async(req,res)=>{
    //buscar todos los datos periodicos en la base de datos
    await IotData.find({},(err,iotData) =>{
        if(err) return res.status(500).send({message : `Error al realizar la petición: ${err}` })
        if(!iotData) return res.status(404).send({message: `No existen datos`})
        res.status(200).send({iotData})
    })
}

iotDataCtrl.createIotData = async(req,res)=>{
    //crear un conjunto de dato periodico en la base de datos
    const iotData = new IotData(req.body)
    await iotData.save((err, iotDataSaved) =>{
        if(err) res.status(500).send({message: `Error al guardar en la base de datos: ${err}`})

        res.status(200).send({product: iotDataSaved})
    })
}

iotDataCtrl.updateIotData = async(req,res)=>{
    const {id} = req.params
    const iotDataUpdate = req.body
    await IotData.findByIdAndUpdate(id, {$set: iotDataUpdate}, {new:true}, (err, iotDataUpdated) =>{
        if(err) return res.status(500).send({message : `Error al actualizar el dato iot: ${err}` })
        res.status(200).send({user: iotDataUpdated})
    })
    res.status(200).send({message: 'El dato iot ha sido editado'})
}

iotDataCtrl.deleteIotData = async(req,res)=>{
    await IotData.findByIdAndRemove(req.params.id, (err)=>{
        if(err) res.status(500).send({message: `Error al eliminar el dato iot: ${err}`})
        res.status(200).send({message: 'El dato iot ha sido eliminado'})
    })
}

module.exports = iotDataCtrl