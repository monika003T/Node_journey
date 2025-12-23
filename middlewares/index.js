const fs=require("fs")
function logResReq(filename){
    return (req,res,next)=>{
    fs.appendFile(
        "filename",
        `\n${Date.now()}${req.ip}:${req.method}:${re.path}\n`,
        (err,data)=>{
            next();
        }
    );
}
}


module.exports={
    logResReq,
}
