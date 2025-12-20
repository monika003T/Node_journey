const http=require('http');
const express= require('express')
// express route easy 
// handler to manage get request app
 const app= express();
 app.get('/',(req,res)=>{
    return res.end("THIS IS THE HOME PAGE")
 })
 
 app.get('/about',(req,res)=>{
    return res.end("THIS IS THE ABOUT PAGE")
 })

app.listen(8000,()=>console.log("SERVER STARTED"))
 //create server
//  const myserver=http.createServer(app);
//  myserver.listen(8000,()=>console.log("SERVER STARTED"));