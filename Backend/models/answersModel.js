const mongoose = require('mongoose')

const Schema=mongoose.Schema

const answersSchema=new Schema({
    body:{
        type: Arrays,
        require: true,
    },
    question:{
        type: Schema.type.ObjectId,
        require: true,
    },
    user:{
        type: Schema.type.ObjectId,
        require: true,
    },
    upvotes:{
        type: Integer,
    },
    downvotes:{
        type: Integer,
    },
}, { timestamps: true})

module.exports= mongoose.model('Answers',answersSchema)