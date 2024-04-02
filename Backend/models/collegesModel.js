const mongoose = require('mongoose')
const User = require('./userModel')

const Schema=mongoose.Schema

const collegesSchema=new Schema({
    name:{
        type: String,
        require: true,
    },
    image:{
        type: Object,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    students:[
        {
            type: User.ObjectID,
            require: true,
        }
    ],
})

module.exports= mongoose.model('Colleges',collegesSchema)