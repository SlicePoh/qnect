const AppError= require("../utils/appError");

const handleCastErrorDB = err => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
};
  
const handleDuplicateFieldsDB = err => {
    const val = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    console.log(val);
  
    const message =`Duplicate field value: ${val}. Please use another value!`;
    return new AppError(message, 400);
};
  
const handleValidationErrorDB = err => {
    const errors = Object.values(err.errors).map(el => el.message);
  
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
};

const sendError=(err,res)=>{
    res.status(err.statusCode).json({
        status: err.status,
        error: err
    })
}

module.exports=(err,req,res,next)=>{
    sendError(err,res);
}