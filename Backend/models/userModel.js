const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const validator = require("validator");
const SchemaTypes = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name! "],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      select: false,
    },
    // image:{
    //     type: Object,

    // },
    college: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
    },
    department: {
      type: String,
    },
    year: {
      type: Number,
      validate(val) {
        if (val < 0) {
          throw new Error("year shouldn't be negative");
        }
      },
    },
    bio: {
      type: String,
    },
    followers: [
      {
        type: SchemaTypes.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: SchemaTypes.ObjectId,
        ref: "User",
      },
    ],
    socials: [
      {
        type: String,
      },
    ],
    skills: [
      {
        type: String,
      },
    ],
    questions_id: [
      {
        type: SchemaTypes.ObjectId,
        ref: "Question",
      },
    ],
    answers_id: [
      {
        type: SchemaTypes.ObjectId,
        ref: "Answer",
      },
    ],
  },
  { timestamps: true }
);

// static signup method
// userSchema.statics.signup = async function (email, password) {
//   if (!email || !password) {
//     throw Error("All fields must be filled");
//   }
//   if (!validator.isEmail(email)) {
//     throw Error("Email is not valid");
//   }
//   if (!validator.isStrongPassword(password)) {
//     throw Error("Password is not enough");
//   }
//   const exists = await this.findOne({ email });

//   if (exists) {
//     throw Error("Email already in use");
//   }

//   const hash = await bcrypt.hash(password, 10);
//   const user = await this.create({ email: email, password: hash });

//   return user;
// };

userSchema.pre("save",async function(next){
    //only run the function if the password is modified
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,12);
    next();
})

userSchema.methods.correctPassword = async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword);
}


// // static login method
// userSchema.statics.login = async function (email, password) {
//   if (!email || !password) {
//     throw Error("All fields must be filled");
//   }
//   if (!validator.isEmail(email)) {
//     throw Error("Email is not valid");
//   }

//   const user = await this.findOne({ email });

//   if (!user) {
//     throw Error("Incorrect email");
//   }

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) {
//     throw Error("Incorrect password");
//   }

//   return user;
// };

const User = mongoose.model("User", userSchema);
module.exports = User;
