const express = require("express");

const path = require('path')

const fs=require('fs');

const app=express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    // res.write("Hello Write!");
    // res.end();

    // res.send("Hello World! -> This is HomePage");
    res.render('index');
    // res.send(fs.readFileSync('views/index.ejs','utf-8'));
});

app.get('/about',(req,res)=>{
    res.send("This is about page");
});

app.listen(3000,()=>{console.log("Server is started on port 3000")});