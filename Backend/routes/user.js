const express = require('express')

//controller functions
const { signup, login, getAllUsers, getUser, addUser,deleteUser, updateUser}= require('../controllers/userController')

const router = express.Router();

router.route('/').get(getAllUsers).post(addUser)

router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser)

//login route
router.post('/login',login)

//register route
router.post('/signup',signup)

module.exports=router