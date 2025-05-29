const express = require("express");
const path = require("path");

const app = express();

// app.use((req,res,next)=>{
//     res.write("Hello World! I am a middleware");
//     next();
// });

// app.get("/",(req,res)=>{
//     res.write("\nHey there! I am '/' route");
//     res.send();
// });

// app.get("/hello",(req,res,next)=>{
//     res.write("\nThis is first /hello route"+new Date());
//     next();
// });

// app.get("/hello",(req,res,next)=>{
//     res.write("\nThis is second /hello route");
//     res.send();
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});


app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join("public"),{index:"SeventhForm.html"}));

// app.post("/check",(req,res,next)=>{
//     const obj=req.body;
//     if(obj.uname.toLowerCase()=="admin"){
//         next();
//     }else{
//         res.status(404).set("content-type","text/html");
//         res.write("<h1 style='color: red;'>Warning! You're not admin. Get out of here.<h1>");
//         res.send();
//     }
// });

// app.post("/check",(req,res)=>{
//     res.status(200).set("content-type","text/html");
//     res.write("<h1 style='color: green;'>Welcome Admin<h1>");
//     res.send();
// });

// app.post("/check",(req,res,next)=>{
//     const obj=req.body;
//     res.status(200).set("content-type","text/html");
//     res.write(`<h1 style='color: green;'>Welcome, ${obj.name}<h1>`);
//     res.write(`<h1 style='color: green;'>Your email is ${obj.email}<h1>`);
//     next();
// });

// app.post("/check",(req,res)=>{
//     const obj=req.body;
//     if(obj.ck!=1){
//         res.write("<span style='color: red;'>You haven\'t subscribed!!<span><a href='/subscribe'>Subscribe Now!</a>");
//     }else{
//         res.write(`<h1 style='color: green;'>Thank you for subscription<h1>`);
//         res.write("<a href='/'>Logout</a>");
//     }
//     res.send();
// });

// app.get("/subscribe",(req,res)=>{
//     const obj=req.body;
//     obj.ck=1;
//     res.write(`<h1 style='color: green;'>Thank you for subscription<h1>`);
//     res.write("<a href='/'>Logout</a>");
//     res.send();
// });

// <!-- Write an ExpressJS to take a UserName, Password, Textarea for “message” &
// submit
// button using get method.
// 1) After clicking submit button the content of submitted details should be
// represented on “/login” page along with one “show vowel” link.
// 2) By clicking “show vowel” link count of vowel used in submitted “message”
// will display on “/message” page. (Use next() to route page) -->

app.post("/login",(req,res,next)=>{
    const obj=req.body;
    res.status(200).set("content-type","text/html");
    res.write(`<h1 style='color: green;'>Welcome, ${obj.uname}<h1>`);
    res.write("<a href='/message'>Show vowel</a>");
    // console.log(obj,obj.message);
    res.send();
});

app.post("/message",(req,res,next)=>{
    const obj=req.body;
    const message=obj.message;
    let count=0;
    for(let i=0;i<message.length;i++){
        if(message[i].isVowel()){count++;}
    }
    req.body.count=count;
    next();
});
app.post("/message",(req,res)=>{
    const obj=req.body;
    res.write(`<h1>No. of vowels: ${obj.count}</h1>`);
    res.send();
});

app.listen(3000,()=>{console.log("Server started on port 3000")});

