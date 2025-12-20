const http= require("http");
const fs= require("fs");
const url=require('url')
const myserver=http.createServer((req,res)=>{
    // if its favicon
    if(req.url==='/favicon.ico')return res.end();

    const log=`${Date.now()}:${req.method}${req.url} New req Recieved\n`
    const myurl=url.parse(req.url,true);

    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myurl.pathname){
            case '/':res.end('Hello from server')
            break 
            case '/about':
                const username=myurl.query.myname;
                res.end(`Hello, ${username}`)  
            break 
            case '/search':
                const search=myurl.query.search_query;
                res.end("HERES YOUR RESULT"+ search);

            break 
            case '/signup':
                if(req.method==="GET") res.end("THIS IS A SIGNUP PAGE");
                else if(req.method==="POST") res.end("SUCCESS");

            default: res.end("not found 404") 
        }
        
    })
    
});
// to run this server be need port
myserver.listen(8000,()=>console.log("Server Started!"));