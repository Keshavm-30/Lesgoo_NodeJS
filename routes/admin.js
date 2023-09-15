const express = require('express')
const router = express.Router();
const path = require("path");
router.get("/abc",(req,res,next)=>{
    console.log("middleware 1")
    res.sendFile(path.join(__dirname,"../","htmlFile","add_course.html"));
    // next();
})
router.post("/course",(req,res,next)=>{
    console.log("body of Request",req.body);
    res.redirect("/");
   
    // next();
})

module.exports= router;