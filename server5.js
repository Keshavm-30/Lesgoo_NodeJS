const http = require('http');
const fs = require('fs')


//
const server = http.createServer((req,res)=>{

    const url = req.url
    if(url=="/"){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page</title></head>");
    res.write("<body> <h1> My first Page</h1></body>");
    res.write("</html>");
    return res.end();
    }
    if(url=='/file'){
        fs.writeFileSync("Newfile.txt","data in the file newfile.txt")
        res.statusCode=302;//this statuscode will redirect us 
        res.setHeader("Location","/second")
        return res.end();
    }
    else if(url=='/second'){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Second Page</title></head>");
    res.write("<body> <h1> My Second Page</h1></body>");
    res.write("</html>");
    // res.end();
    return res.end();
    }


})

server.listen(3000)
