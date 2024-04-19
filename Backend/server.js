require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const questionRoutes = require("./routes/question");
const answerRoutes = require("./routes/answer");
const userRoutes = require("./routes/user");
const globalErrorHandler= require("./controllers/errorController")


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
})
  .then(() => console.log('DB connection successful!'))
  .catch((err) => {
    console.log(err);
});
const port = process.env.BACKEND_PORT;

//express app
const app = express();

app.use(cors());

// middleware
app.use(express.json());


app.listen(port, () => {
  console.log("Server running on port:", port);
});

//routes
app.use("/api/v1/question", questionRoutes);
app.use("/api/v1/answer", answerRoutes);
app.use("/api/v1/user", userRoutes);

// app.all('*',(req,res,next)=>{
//   console.log("URL not found");
// })

//  app.use(globalErrorHandler)