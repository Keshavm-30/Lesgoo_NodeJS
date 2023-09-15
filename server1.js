const http = require('http');

//here in the createServer we are passing an arrow function which is an request listener function 
//and this request listener function will execte when we get a request on our server 
const server = http.createServer((req,res)=>{
    console.log("you are here")
});




server.listen(3000)
