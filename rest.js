const express= require("express");
const users=require("./MOCK_DATA.json")
const fs=require("fs")

const app=express();
const PORT=8000;

// middlewares
app.use(express.urlencoded({extented:false}))
//Routes

// html page render route
app.get('/users',(req,res)=>{
    const html=`
    <ul>${
        users.map((users)=>`<li>${users.first_name}</li>`).join("")
    } </ul>`;
    res.send(html);
})

//get all users REST api 
app.get('/api/users',(req,res)=>{
    res.setHeader("myName","Monika Thakur")
    return res.json(users);
})

// get users by id
app.route("/api/users/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((users)=>users.id==id);
    return res.json(user);
})
.patch((req,res)=>{
    return res.json({status:"pending"})
})
.delete((req,res)=>{
    return res.json({status:"pending"})
});

//post 
app.post("/api/users",(req,res)=>{
    const body=req.body;
    if(!body||!body.first_name||!body.last_name||!body.email||!body.gender||!body.job_title){
        //400 bad request
        return res.status(400).json({msg:"all fields required"})
    }
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        //201 created successfull
     return res.status(201).json({status:"success",id:users.length});
    })
});
//listen
app.listen(PORT,()=>{
    console.log(`Server Started at PORT ${PORT}`)
})