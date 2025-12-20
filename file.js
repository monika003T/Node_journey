const fs=require("fs");
// creating a file sync 
const data=fs.writeFileSync("./test.txt","Hey There I'm MONIKA")
console.log(data)

//creating a file async 
// Async doesnt return anything uses callback function func.
fs.writeFile("./another2.txt","Async file",(err)=>{

})
