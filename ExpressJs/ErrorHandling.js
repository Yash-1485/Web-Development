const express=require("express");

const app=express();

// Middleware Function
app.use((req,res,next)=>{
    console.log("This is a middleware");
    next();
});

app.get("/",(req,res)=>{
    console.log("Now we are in homepage get method");
    res.status(200).send("<h1>Error Resolved, Hello World!</h1>");
});

app.get("/profile",(req,res)=>{
    console.log("Now we are in profile get method");
    res.status(200).send("This is profile file");
});

app.get("/about",(req,res,next)=>{
    console.log("Now we are in aboutpage get method");
    // To stop the process, we are writing return here next()
    return next(new Error("Something went wrong"));
});

// Error Handler
app.use((err,req,res,next)=>{
    console.log("This is error handling middleware");
    console.log(err.stack);
    res.status(404).send("Something went wrong!! Please Wait");
});

app.listen(3000,()=>{console.log("Server started on port 3000.");});