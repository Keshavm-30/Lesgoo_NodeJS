const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const AdminRouter = require('./routes/admin')
const courseRouter =  require('./routes/course')
const app = express();
app.use(bodyParser.urlencoded({extended:false })) 

app.use('/admin',AdminRouter);
app.use(courseRouter);
app.use((req,res,next)=>{
res.status(404).send('<h1>Error 404</h1>')
})
app.listen(3000);
