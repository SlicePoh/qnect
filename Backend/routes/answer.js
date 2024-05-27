const express = require('express')

//controller functions
const { getAllAnswers, getAnswer, addAnswer,deleteAnswer, updateAnswer }= require('../controllers/answerController')

const {protect} =require('../controllers/userController');

const router = express.Router();

// GET all Answers
router.route('/').get(protect,getAllAnswers).post(protect,addAnswer)

router.route('/:id').get(protect,getAnswer).delete(protect,deleteAnswer).patch(protect,updateAnswer)

module.exports=router