const express = require('express')

//controller functions
const { getAllQuestions, getQuestion, addQuestion,deleteQuestion, updateQuestion }= require('../controllers/questionController')

const router = express.Router();

// GET all questions
router.route('/').get(getAllQuestions).post(addQuestion)

router.route('/:id').get(getQuestion).delete(deleteQuestion).patch(updateQuestion)

module.exports=router