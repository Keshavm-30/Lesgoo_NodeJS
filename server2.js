const http = require('http');


const server = http.createServer((req,res)=>{
    console.log("URL:",req.url,"Method:",req.method,"Header:",req.headers)
    console.log(res)
   console.log("hello")
});




server.listen(3000)
