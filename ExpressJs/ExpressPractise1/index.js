const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    fs.readdir("./Files",(err,files)=>{
        if(err) return err
        res.render("index.ejs",{files:files});
    })
});

app.post("/create",(req,res)=>{
    fs.writeFile(path.join("./Files",req.body.taskName.split(" ").join('')+".txt"),req.body.taskDetails,(err)=>{
        if(err) return err
        res.redirect("/");
    });
});

app.get("/file/:fileName",(req,res)=>{
    fs.readFile(path.join("./Files",req.params.fileName),(err,data)=>{
        if(err) return err
        res.render("show",{filename: req.params.fileName,filedata: data});
    });
});

app.listen(3000, () => { console.log("Server started on port 3000"); });