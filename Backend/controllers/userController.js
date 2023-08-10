const User= require('../models/userModel')

//login user
const loginUser = async (req,res)=>{
    res.JSON({msg: 'login user'})
}

//signup user
const signupUser = async (req,res)=>{
    res.JSON({msg: 'login user'})
}

module.exports={loginUser,signupUser}