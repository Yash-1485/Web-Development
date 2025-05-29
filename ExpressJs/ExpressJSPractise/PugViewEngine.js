const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname,"views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,"public")));

// app.get("/",(req,res)=>{
//     // res.render("index",{
//     //     name: "Google",
//     //     url: "https://www.google.com"
//     // });
//     res.render("index",{object:{
//         name: "Google",
//         url: "https://www.google.com"
//     }});
// });

// app.post("/login",(req,res)=>{
//     const {username,password}=req.body;
//     // res.send(req.body);
//     res.render("data",{user:{username,password}})
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});

// To load student form using pug file email, name course -> ce, it, cse -> data on /student

app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/student",(req,res)=>{
    // const {username,password}=req.body;
    res.send(req.body);
    // res.render("data",{user:{username,password}});
});

app.listen(3000,()=>{console.log("Server started on port 3000")});