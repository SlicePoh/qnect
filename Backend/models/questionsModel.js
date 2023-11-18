const mongoose = require('mongoose')

const Schema=mongoose.Schema

const questionsSchema=new Schema({
    title:{
        type: String,
        require: true,
    },
    user:{
        type: Schema.type.ObjectId,
        require: true,
        unique: true,
    },
    likes:{
        type: Integer,
    },
    comments:{
        type: Arrays,
    },
    answers:{
        type: Arrays,
    },
}, { timestamps: true})

module.exports= mongoose.model('Questions',questionsSchema)