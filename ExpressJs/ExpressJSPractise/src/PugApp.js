const express = require("express");
const path=require("path");
const app = express();

app.set("view engine","pug");
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"../public"),{index:"NewForm.html"}));

app.post("/newpage",(req,res)=>{
    const obj=req.body;
    res.render("index",{object: obj});
    res.send();
});

app.listen(3003,()=>{console.log("Server started on port 3000")});