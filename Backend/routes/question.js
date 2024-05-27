const express = require('express')

//controller functions
const { getAllQuestions, getQuestion, addQuestion,deleteQuestion, updateQuestion,updateQuestionComments }= require('../controllers/questionController')

const {protect} =require('../controllers/userController');

const router = express.Router();

// GET all questions
router.route('/').get(protect,getAllQuestions).post(protect,addQuestion)

router.route('/:id').get(protect,getQuestion).delete(protect,deleteQuestion).patch(protect,updateQuestion)
router.route('/:id/comments').patch(protect,updateQuestionComments)

module.exports=router