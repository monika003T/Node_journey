const mongoose = require("mongoose");
const { timeStamp } = require("console");

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
const User= mongoose.model('user',userSchema)

// export
module.exports=User;