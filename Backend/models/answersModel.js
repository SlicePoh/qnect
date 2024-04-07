const mongoose = require('mongoose');
const Question = require('./questionsModel');
const User = require('./userModel');

const Schema=mongoose.Schema

const answersSchema=new Schema({
    body:{
        type: String,
        required: true,
    },
    // question:{
    //     type: Question.ObjectId,
    //     require: true,
    // },
    // user:{
    //     type: User.ObjectId,
    //     require: true,
    // },
    votes:{
        type: Number,
    },
}, { timestamps: true})

const Answer = mongoose.model('Answers',answersSchema)
module.exports= Answer;