const express=require("express");
const app=express();
const path=require('path')
const fs=require('fs');


app.use((req,res,next)=>{
    try{
        console.log("This is a middleware part");
        // setTimeout(()=>{
        //     next();
        // },3000);
        next();
    }catch(Exception){
        console.log("error occured");
    }
});

app.get("/",(req,res)=>{
    // res.send("This is a homepage");
    const data=fs.readFileSync(path.join(__dirname,"Test1BootstrapFile.html"));
    res.send(data.toString());
});

app.get("/about",(req,res)=>{
    // res.send("This is about page.");
    const data=fs.readFileSync(path.join(__dirname,"Test2BootstrapFile.html"));
    res.send(data.toString());
});

app.listen(3300,()=>{console.log("Server started successfully on port 3300")});