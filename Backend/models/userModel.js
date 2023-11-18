const mongoose = require('mongoose')

const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
    },
    college:{
        type: String,
        require: true,
    },
    verfied:{
        type: Boolean,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
})

module.exports= mongoose.model('User',userSchema)