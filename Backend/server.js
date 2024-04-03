require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')

const userRoutes= require('./routes/user')

mongoose.connect(process.env.MONGO_URL)
.then(console.log("DB Connected"))

const port=process.env.BACKEND_PORT

//express app
const app=express()

// middleware
app.use(express.json())

app.get("/",(req,res,next) =>{
    res.send("working")
    next()
})
app.listen(port,()=>{
    console.log("Server running on port:",port);
})

//routes
app.use('/api/user',userRoutes)