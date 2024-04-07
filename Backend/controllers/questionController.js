const Question = require('../models/questionsModel')
// const User = require('../models/userModel')

//get all questions
exports.getAllQuestions= async (req,res)=>{
    // const question_id=req.question._id
    try {
        const question= await Question.find();
        
        res.status(200).json({
            status: 'success',
            data: {question}
            }
        );    
    } catch (error) {
        res.status(404).json({
            status: "failed",
            error
        })
    }
}

// get a single question
exports.getQuestion= async (req,res)=>{
    
    try{
        const question=await Question.findById(req.params.id)

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
}

// create a new question
exports.addQuestion= async (req,res)=>{
    // const{title,likes,comments}=req.body;
    
    try{
        const question=await Question.create(req.body)
        res.status(201).json({
            status: "success",
            data: {question}
        })
    }
    catch(error){
        res.status(400).json({
            status: "failed",
            error
        })
    }
}

// delete a question
exports.deleteQuestion= async (req,res)=>{
    try{
        await Question.findByIdAndDelete(req.params.id)

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

// update a question
exports.updateQuestion= async (req,res)=>{
    // const{title,likes,comments}=req.body;
    // const newQuestion={}

    try{
        const question=await Question.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.status(200).json({
            status: "success",
            data: {question}
        })
    }
    catch(error){
        res.status(400).json({
            status: "failed",
            error
        })
    }
}