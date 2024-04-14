const mongoose = require('mongoose');
const User = require('./userModel');
const Answer = require('./answersModel');

const Schema=mongoose.Schema

const questionsSchema=new Schema({
    title:{
        type: String,
        require: true,
    },
    // user:{
    //     type: User.ObjectId,
    //     require: true,
    //     unique: true,
    // },
    likes:{
        type: Number,
    },
    tags:[
        {
            type: String
        },
    ],
    // comments:[
    //     { 
    //         type: String
    //     }
    // ],
    // answers:[
    //     { 
    //         type: Answer.ObjectId
    //     }
    // ],
}, { timestamps: true})

const Question = mongoose.model('Questions',questionsSchema);
module.exports= Question; 