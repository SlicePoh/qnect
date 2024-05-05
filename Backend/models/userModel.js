const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const validator = require("validator");
const SchemaTypes = mongoose.Schema.Types;
const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    // image:{
    //     type: Object,

    // },
    college:{
        type: String,
        required: true,
    },
    verified:{
        type: Boolean,
    },
    department:{
        type: String,
    },
    year:{
        type: Number,
        validate(val){
            if(val<0){
                throw new Error("year shouldn't be negative");
            }
        }
    },
    bio:{
        type: String,
    },
    followers: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'User',
        }
    ],
    following:[
        {
            type: SchemaTypes.ObjectId,
            ref: 'User',
        }
    ],
    socials:[
        {
            type: String
        }
    ],
    skills:[
        {
            type: String
        },
    ],
    questions_id:[
        {
            type: SchemaTypes.ObjectId,
            ref: 'Question',
        }
    ],
    answers_id:[
        {
            type: SchemaTypes.ObjectId,
            ref: 'Answer',
        }
    ],
}, { timestamps: true})

// static signup method
userSchema.statics.signup = async function (email, password) {
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not enough')
    }
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email: email, password: hash });

    return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error("Incorrect email");
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw Error('Incorrect password')
    }

    return user;
};

const User = mongoose.model('User',userSchema)
module.exports=User;