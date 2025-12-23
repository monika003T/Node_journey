const { error } = require("console")
const fs=require("fs")
// sync
const data=fs.readFileSync("./contact.txt","utf-8")
console.log(data)

// 
fs.readFile("./contact2.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err)
    }else{
        console.log(result)
    }
})
// creating a folder 
// fs.mkdir('myfolder');

// appending
fs.appendFile('test.txt', "\nNewline",(err)=>{
    if(err)throw err;
});

// write file promise based
const fn=require('fs/promises');
async function writeFile(){
await fn.writeFile("data.txt","Hello World")
}
writeFile(); // used in modern backend 
// delete file async
fn.unlink('data.txt',(err)=>{
    if(err)throw err;
    console.log("file deleted")
})

//create directory
fn.mkdir('uploads',{recursive: true}, (err)=>{
    if (err) throw err;
})

//read directory
async function readdir(){
const files= await fn.readdir('uploads');
console.log(files)
}
async function rm(){
await fn.rm('uploads',{recursive:true, force: true})}