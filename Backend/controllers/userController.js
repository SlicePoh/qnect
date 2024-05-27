const User = require('../models/userModel')
const jwt =require ('jsonwebtoken')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const {promisify} =require('util');

//signToken

const signToken = id =>{
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    });

};

const createToken = (user,statusCode,res) =>{
    const token = signToken(user._id);
    user.password = undefined;
    res.status(statusCode).json({
        status:'success',
        token,
        data: user
    })
}


//signup user

exports.signup = catchAsync(async(req,res,next) =>{
    const newUser = await User.create(req.body);
    createToken(newUser,201,res);
})

exports.login = catchAsync(async(req,res,next) =>{
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');
  
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Incorrect email or password', 401));
    }
  
    // 3) If everything ok, send token to client
    createToken(user, 200, res);

})

exports.protect = catchAsync(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
  
    if (!token) {
      return next(
        new AppError('You are not logged in! Please log in to get access.', 401)
      );
    }
  
    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
    // 3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new AppError(
          'The user belonging to this token does no longer exist.',
          401
        )
      );
    }
  
    // 4) Check if user changed password after the token was issued
    // if (currentUser.changedPasswordAfter(decoded.iat)) {
    //   return next(
    //     new AppError('User recently changed password! Please log in again.', 401)
    //   );
    // }
  
    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
  });
  


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