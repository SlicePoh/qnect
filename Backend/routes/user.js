const express = require('express')

//controller functions
const { signupUser, loginUser, getAllUsers, getUser, addUser,deleteUser, updateUser}= require('../controllers/userController')

const router = express.Router();

router.route('/').get(getAllUsers).post(addUser)

router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser)

//login route
router.post('/login',loginUser)

//register route
router.post('/register',signupUser)

module.exports=router