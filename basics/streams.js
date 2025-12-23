//streams read chunk by chunk
const fs=require('fs')
const readStream=fs.createReadStream("bigfile.txt");
readStream.on("data",chunk=>{
    
    console.log(chunk)
})

//buffer buffer based read 
const fn= require('fs')
const data= fn.readFileSync('bigfile.txt')
console.log(data)

const os=require('os')
console.log(os.cpus().length)