const User = require('../models/userModel')
const jwt =require ('jsonwebtoken')

const createToken =(_id)=>{
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '2d'})
}

// login user
exports.loginUser = async (req, res) => {
    const {email,password}=req.body
    try {
        const user = await User.login(email, password)
    
        // create a token 
        const token =createToken (user._id)
    
        res.status(200).json({email, token})
    } 
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
exports.signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create a token 
    const token =createToken (user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}



//get all Users
exports.getAllUsers= async (req,res)=>{
    try {
        const user= await User.find();
        
        res.status(200).json({
            status: 'success',
            data: {user}
            }
        );    
    } catch (error) {
        res.status(404).json({
            status: "failed",
            error
        })
    }
}

// get a single user
exports.getUser= async (req,res)=>{
    
    try{
        const user=await User.findById(req.params.id)

        res.status(200).json({
            status: "success",
            data: {user}
        })
    }
    catch(error){
        res.status(404).json({
            status: "failed",
            error
        })
    }
}

// create a new user
exports.addUser= async (req,res)=>{

    try{
        const user=await User.create(req.body)
        res.status(201).json({
            status: "success",
            data: {user}
        })
    }
    catch(error){
        res.status(400).json({
            status: "failed",
            error
        })
    }
}

// delete a user
exports.deleteUser= async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success"
        })
    }
    catch(error){
        res.status(404).json({
            status: "failed",
            error
        })
    }
}

// update a User
exports.updateUser= async (req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.status(200).json({
            status: "success",
            data: {user}
        })
    }
    catch(error){
        res.status(400).json({
            status: "failed",
            error
        })
    }
}