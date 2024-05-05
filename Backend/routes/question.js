const express = require('express')

//controller functions
const { getAllQuestions, getQuestion, addQuestion,deleteQuestion, updateQuestion,updateQuestionComments }= require('../controllers/questionController')

const router = express.Router();

// GET all questions
router.route('/').get(getAllQuestions).post(addQuestion)

router.route('/:id').get(getQuestion).delete(deleteQuestion).patch(updateQuestion)
router.route('/:id/comments').patch(updateQuestionComments)

module.exports=router