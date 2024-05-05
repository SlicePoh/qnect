const mongoose = require('mongoose');
const SchemaTypes = mongoose.Schema.Types;
const Schema=mongoose.Schema

const questionsSchema=new Schema({
    title:{
        type: String,
        required: true,
    },
    user_id:{
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    likes:{
        type: Number,
        validate(val){
            if(val<0){
                throw new Error("likes shouldn't be negative");
            }
        }
    },
    tags:[
        {
            type: String
        },
    ],
    views:{
        type: Number
    },
    shared:{
        type: Number
    },
    comments:[
        { 
            id: {
                type: SchemaTypes.ObjectId,
                ref: 'User'
            },
            text: {
                type: String
            }
        }
    ],
    answers_id:[
        { 
            type: SchemaTypes.ObjectId,
            ref: 'Answer'
        }
    ],
}, { timestamps: true})

const Question = mongoose.model('Questions',questionsSchema);
module.exports= Question; 