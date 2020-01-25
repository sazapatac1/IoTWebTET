const User = require('../models/user')
const service = require('../services/services');
const bcrypt = require('bcrypt-nodejs')
const userCtrl = {}

userCtrl.getUsers = async(req,res)=>{
    //buscar todos los usuarios en la base de datos
    await User.find({}, (err,users) =>{
        if(err) return res.status(500).send({message : `Error al realizar la petición: ${err}` })
        if(!users) return res.status(404).send({message: `No existen usuarios`})
        res.status(200).send(users)
    })
    res.status(200).send(users)
}

userCtrl.getUser = async(req,res)=>{
    await User.findById(req.params.id, (err,user)=>{
        if(err) return res.status(500).send({message : `Error al realizar la petición: ${err}` })
        if(!user) return res.status(404).send({message: `No existe usuario ${req.params.id}`})
        res.status(200).send(user)
    })
}

userCtrl.signUp = async(req,res)=>{
    const user = new User(req.body)
    await user.save((err) => {
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

        return res.status(200).send({
            message: 'Registro exitoso',
            accessToken: service.createToken(user),
            id: user._id,
            email: user.email,
            username: user.username
        })
    })
}

userCtrl.signIn = async(req, res)=>{
    const expiresIn = 24*60*60
    await User.findOne({ username: req.body.username }).select('email username password').exec(function (err, user) {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'Usuario no registrado' })
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.status(200).send({
                message: 'Login exitoso',
                accessToken: service.createToken(user),
                id: user._id,
                email: user.email,
                username: user.username,
                expiresIn: expiresIn
            })
        }
        else {
            res.status(400).send({
                message: 'Contraseña incorrecta, intenta de nuevo!'
            })
        }
    })
}


userCtrl.editUser = async(req,res) =>{
    const {id} = req.params
    const userUpdate = req.body
    await User.findByIdAndUpdate(id, {$set: userUpdate}, {new:true}, (err, userUpdated) =>{
        if(err) return res.status(500).send({message : `Error al actualizar usuario: ${err}` })
        res.status(200).send({user: userUpdated})
    })
    res.status(200).send({message: 'El usuario ha sido editado'})
}

userCtrl.deleteUser = async(req,res)=>{
    await User.findByIdAndRemove(req.params.id, (errr)=>{
        if(err) res.status(500).send({message: `Error al eliminar el usuario: ${err}`})
        res.status(200).send({message: 'El usuario ha sido eliminado'})
    })
    
}

module.exports = userCtrl