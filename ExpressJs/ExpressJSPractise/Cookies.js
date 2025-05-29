const express = require("express");
const cp = require("cookie-parser");
const app = express()

app.use(cp());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("This is a Homepage");
});

// app.get("/cookie",(req,res)=>{
//     res.status(200).set("content-type","application/json");
//     // To set cookies
//     res.cookie("name","Shrey");
//     res.cookie("age","19");
//     res.cookie("subject","express.js");

//     // To get all cookies
//     const cookies = req.cookies;
//     // res.write(JSON.stringify(cookies));
//     // console.log(cookies);

//     // To remove any particular cookie
//     res.clearCookie("age");

//     res.send(cookies);
// });

app.get("/cookie",(req,res,next)=>{
    res.status(200);
    res.cookie("username","shrey123",{expires:new Date(Date.now()+10000)}); // Will clear cookie after a particular time
    res.cookie("firstname","shrey");
    res.cookie("lastname","rakholiya");
    next();
});
app.get("/cookie",(req,res)=>{
    console.log(req.cookies.username);
    console.log(req.cookies.firstname);
    console.log(req.cookies.lastname);
    // res.write(req.cookies.username);
    // res.write(req.cookies.firstname);
    // res.write(req.cookies.lastname);
    res.send();
});

app.get("/cookie",(req,res)=>{  
    // res.clearCookie("username");
    console.log(req.cookies.username);
    res.send("Cookie cleared successfully");
});

app.listen(3000,()=>{console.log("Server started on port 3000")});