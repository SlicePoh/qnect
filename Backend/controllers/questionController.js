const Question = require('../models/questionsModel')
// const User = require('../models/userModel')
const ApiFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync')

const searchItem='minus'

//get all questions
exports.getAllQuestions= async (req,res,next)=>{
    // const question_id=req.question._id
   try{ 
        const features=new ApiFeatures(Question.find(),req.query).search()
        const question = await features.query
        res.status(200).json({
            status: 'success',
            data: {question}
            }
        ); 
    }  
    catch(error){
        res.status(404).json({
            status: "failed",
            error
        })
    } 
}

// get a single question
exports.getQuestion= catchAsync(async (req,res,next)=>{
    try{
        const question=await Question.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {question}
        })
    }
    catch(error){
        res.status(404).json({
            status: "failed",
            error
        })
    }
})

// create a new question
exports.addQuestion= catchAsync( async (req,res,next)=>{
    try{
        await Question.create(req.body)
        const question=Question.find();
        res.status(201).json({
            status: 'success',
            data: {question}
        })
    }
    catch(error){
        res.status(404).json({
            status: "failed",
            error
        })
    }
})

// delete a question
exports.deleteQuestion= catchAsync(async (req,res,next)=>{
    try{
        await Question.findByIdAndDelete(req.params.id);
        
        const question=Question.find();
        res.status(200).json({
            status: "success",
            data: {question}
        })
    }
    catch(error){
        res.status(404).json({
            status: "failed",
            error
        })
    }
})

// update a question
exports.updateQuestion= catchAsync(async (req,res,next)=>{
    
    try{
        await Question.findByIdAndUpdate(req.params.id,req.body,{new: true})
        const question= Question.find();
        res.status(200).json({
            status: "success",
            data: {question}
        })
    }
    catch(error){
        res.status(404).json({
            status: "failed",
            error
        })
    }
})

// Update comments of a question
exports.updateQuestionComments = catchAsync(async (req, res, next) => {

    // Find the question by ID and update the comments array
    const question = await Question.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!question) {
        return res.status(404).json({
            status: 'fail',
            message: 'Question not found',
        });
    }
    const questions= await Question.find();
    res.status(200).json({
        status: 'success',
        data: {
            question,
        },
    });
});