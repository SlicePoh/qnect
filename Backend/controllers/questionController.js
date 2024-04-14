const Question = require('../models/questionsModel')
// const User = require('../models/userModel')
const ApiFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync')

const searchItem='minus'

//get all questions
exports.getAllQuestions= async (req,res,next)=>{
    // const question_id=req.question._id
    const features=new ApiFeatures(Question.find(),req.query).search()
    const question = await features.query
    res.status(200).json({
        status: 'success',
        data: {question}
        }
    );    
}

// get a single question
exports.getQuestion= catchAsync(async (req,res,next)=>{
    const question=await Question.findById(req.params.id)
    res.status(200).json({
        status: 'success',
        data: {question}
    })
})

// create a new question
exports.addQuestion= catchAsync( async (req,res,next)=>{
    // const{title,likes,comments}=req.body;
    const question=await Question.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {question}
    })
})

// delete a question
exports.deleteQuestion= catchAsync(async (req,res,next)=>{
    await Question.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: "success"
    })
})

// update a question
exports.updateQuestion= catchAsync(async (req,res,next)=>{
    // const{title,likes,comments}=req.body;
    // const newQuestion={}
    const question=await Question.findByIdAndUpdate(req.params.id,req.body,{new: true})
    res.status(200).json({
        status: "success",
        data: {question}
    })
})