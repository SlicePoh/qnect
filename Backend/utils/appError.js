class AppError extends Error{
    constructor(msg,statusCode){
        super(msg);
        this.statusCode=statusCode;
        this.isOperational=true;
        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports=AppError