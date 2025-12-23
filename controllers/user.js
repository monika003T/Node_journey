const User= require('../models/user')


async function handleGetAllUser(req,res){
    const getalluser = await User.find();
    return res.status(200).json(getalluser);
}

async function handleGetUserById(req,res){
     const user=await User.findById(req.params.id);
     if(!user) return res.status(404).json({error: "user not found"})
     return res.json(user)
}
async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{last_Name:"Jain"});
    return res.json({status:"success"})
}
async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"success"})
}
async function handleCreateUserById(req,res){
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
    return res.status(201).json({msg:"success",id: result._id})
    
}
module.exports={
    handleGetAllUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUserById,
}