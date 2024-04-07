const Answer = require('../models/answersModel')

//get all Answers
exports.getAllAnswers= async (req,res)=>{
    try {
        const answer= await Answer.find();
        
        res.status(200).json({
            status: 'success',
            data: {answer}
            }
        );    
    } catch (error) {
        res.status(404).json({
            status: "failed",
            error
        })
    }
}

// get a single Answer
exports.getAnswer= async (req,res)=>{
    
    try{
        const answer=await Answer.findById(req.params.id)

        res.status(200).json({
            status: "success",
            data: {answer}
        })
    }
    catch(error){
        res.status(404).json({
            status: "failed",
            error
        })
    }
}

// create a new Answer
exports.addAnswer= async (req,res)=>{
    try{
        const answer=await Answer.create(req.body)
        res.status(201).json({
            status: "success",
            data: {answer}
        })
    }
    catch(error){
        res.status(400).json({
            status: "failed",
            error
        })
    }
}

// delete a Answer
exports.deleteAnswer= async (req,res)=>{
    try{
        await Answer.findByIdAndDelete(req.params.id)

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

// update a Answer
exports.updateAnswer= async (req,res)=>{

    try{
        const answer=await Answer.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.status(200).json({
            status: "success",
            data: {answer}
        })
    }
    catch(error){
        res.status(400).json({
            status: "failed",
            error
        })
    }
}