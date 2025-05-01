const express = require("express");
const cp=require("cookie-parser");
const app = express();

app.use(cp());
app.get("/",(req,res)=>{

    // Setting Cookies
    res.cookie("fname","ABC");
    res.cookie("lname","XYZ");

    // Clearing Cookie
    res.clearCookie("lname");

    // Get all Cookies
    console.log(req.cookies.fname);

    res.write("Hello World!");
    res.send();
});

app.listen(3000,()=>{console.log("Server started on port 3000");});