const express= require("express");
const{logResReq}=require('./middlewares')

const {connectmongo} = require('./connection');

const { timeStamp } = require("console");
const userRouter=require('./routes/user')

//connection
connectmongo("mongodb://127.0.0.1:27017/learningdb")
.then(()=>{
    console.log("mongodb connected")
})

const app=express();
const PORT=8000;

app.use(logResReq('log.txt'))

app.use("api/users",userRouter)
app.listen(PORT,()=>{
    console.log(`Server Started at PORT ${PORT}`)
})