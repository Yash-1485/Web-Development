const express = require("express");
const path = require("path");
const app = express();

// First Part
// app.get("/",function(req,res){
//     res.send("Hello World!");
// });

// app.listen(3000,()=>{console.log("Server started on port 3000");});

// Second Part
// app.get("/",(req,res)=>{
//     res.set("content-type","text/html").status(200);
//     res.write("<h1>This is home page</h1>");
//     res.send();
// });

// app.get("/:name/:age",(req,res)=>{
//     res.set("content-type","application/json").status(200);
//     // res.write(JSON.stringify(req.params,null,4));
//     res.json(req.params);
//     res.send();
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});

// Third Program
app.use(express.static(path.join(__dirname, "MyFolder")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.get("/formSubmitted",(req,res)=>{
//     res.send(req.query);
// });
app.post("/formSubmitted",(req,res)=>{
    res.send(req.body);
});

app.listen(3003, () => { console.log("Server started on port 3003")});