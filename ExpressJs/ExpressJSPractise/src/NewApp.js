const express = require("express");
const path=require("path");
// const bp=require("body-parser");
// const url=bp.urlencoded({extended:true});
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"../public"),{index:"NewForm.html"}));

app.post("/newpage",(req,res)=>{
    const obj=req.body;
    if(obj.pwd!=obj.cpwd){
        res.status(404).set("content-type","text/html");
        res.write("<h1 style='color: red;'>Password and confirm password does not matching.<h1>");
    }else{
        res.status(404).set("content-type","text/html");
        res.write(`<h2>Username: ${obj.uname}</h2>`);
        res.write(`<h2>Password: ${obj.pwd}</h2>`);
        res.write(`<h2>Gender: ${obj.gender.toUpperCase()}</h2>`);
    }
    res.send();
});

app.listen(3000,()=>{console.log("Server started on port 3000")});