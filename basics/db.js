// Mongodb is a nosql database
const express= require("express");
const users=require("../MOCK_DATA.json")
const fs=require("fs")

const mongoose = require("mongoose");
const { timeStamp } = require("console");

const app=express();
const PORT=8000;

app.use(express.urlencoded({extended:false}));
app.use((req,res,next))=>{
    fs.appendFile(
        "log.txt",
        `n${Date.now()}${req.ip}:${req.method}:${re.path}\n`,
        (err,data)=>{
            next();
        }
    );
}

/* how to connect mongodb to nodejs
 1. make schema- schema is a structure for a document
2. make model for that schema 
3.connect to database
4. using that model perform crud operation */


/* // schema
const userSchema= new mongoose.Schema({
first_Name:{
    type:String,
    required:true,
},
last_Name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},
gender:{
    type:String,
    
},
job_title:{
    type:String,
}
},{timeStamp:true});

// model
const User=mongoose.model('user',userSchema);
 */

// connection
mongoose
.connect('mongodb://127.0.0.1:27017/learningdb')
.then(()=>console.log('mongodb connected'))
.catch((err)=>console.log('Mongo err',err));


/* app.get("/users", async (req, res)=>{
    const allusers=await User.find({});
    const html=`
    <ul>
        ${allusers.map((user)=>`<li>${user.first_Name}</li>`).join("")}
        </ul>`;
        res.send(html)
})
app.post("/api/users",async (req,res)=>{
    const body=req.body;
    if(!body||
        !body.first_name||
        !body.last_name||
        !body.email||
        !body.gender||
        !body.job_title){
        //400 bad request
        return res.status(400).json({msg:"all fields required"})
    }
     const result= await User.create({
        first_Name:body.first_name,
        last_Name:body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title,

    })
    console.log("result",result)
    return res.status(201).json({msg:"success"})
    
});
//get all users rest api
app.get('/api/users',async (req,res)=>{
    const getalluser=await User.find();
    
    return res.status(200).json(getalluser);
})

app.route('/api/users/:id')
.get(async (req,res)=>{
    const user=await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"})
        return res.json(user)
})
.patch(async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{last_Name:"Jain"});
    return res.json({status:"success"})
})
.delete(async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"success"})
}) */

app.listen(PORT,()=>{
    console.log(`Server Started at PORT ${PORT}`)
})