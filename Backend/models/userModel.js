const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const validator = require("validator");
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
    image:{
        type: Object,

    },
    college:{
        type: String,
        require: true,
    },
    verfied:{
        type: Boolean,
    },
    department:{
        type: String,
    },
    year:{
        type: Date,
    },
    bio:{
        type: String,
    },
    followers:{
        type: Array,
    },
    following:{
        type: Array,
    },
    socials:{
        type: Array,
    },
    questions_asked:{
        type: Array,
      
    },
    answers_given:{
        type: Array,
     
    },
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

    const user = await this.create({ email, password: hash });

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

module.exports= mongoose.model('User',userSchema)