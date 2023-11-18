const mongoose = require('mongoose')

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
    students:{
        type: Arrays,
        require: true,
    },
})

module.exports= mongoose.model('Colleges',collegesSchema)