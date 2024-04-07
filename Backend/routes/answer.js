const express = require('express')

//controller functions
const { getAllAnswers, getAnswer, addAnswer,deleteAnswer, updateAnswer }= require('../controllers/answerController')

const router = express.Router();

// GET all Answers
router.route('/').get(getAllAnswers).post(addAnswer)

router.route('/:id').get(getAnswer).delete(deleteAnswer).patch(updateAnswer)

module.exports=router