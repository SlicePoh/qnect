const mongoose = require('mongoose');
const SchemaTypes = mongoose.Schema.Types;
const Schema=mongoose.Schema

const answersSchema=new Schema({
    body:{
        type: String,
        required: true,
    },
    question:{
        type: SchemaTypes.ObjectId,
        ref: 'Question',
        required: true,
    },
    user:{
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    votes:{
        type: Number,
    },
}, { timestamps: true})

const Answer = mongoose.model('Answers',answersSchema)
module.exports= Answer;