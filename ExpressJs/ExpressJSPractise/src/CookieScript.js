const express = require("express");
const path=require("path");
const cp = require("cookie-parser");
const app = express();

app.use(cp());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,"../public"),{index:"CookieForm.html"}));

// app.get("/",(req,res)=>{
//     if (req.query.uname){
//         document.getElementById("uname").value=req.query.uname;
//         console.log(req.query.uname);
//     }
//     res.send();
// });

// app.get("/next",(req,res)=>{
//     res.cookie("uname",req.body.uname);
//     res.send("Cookie set successfully");
// });

// app.post("/next",(req,res)=>{
//     res.cookie("uname",req.body.uname);
//     res.send("Cookie set successfully");
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});

// You have been assigned 

// You have been assigned to develop a user feedback form for a website using Express.js and cookies. Implement the following requirements:
// Create a form with the following fields:
// Name (input field)
// Email (input field)
// Message (textarea field)
// Rating (radio buttons: Bad, Average, Good, Very Good, Excellent)
// When the user submits the form, store their feedback information (name, email, message, and rating) in a cookie named "feedback" that expires in 10 seconds.
// Display a confirmation message to the user after successfully submitting the form & Create a link to display the feedback details stored in the "feedback" cookie. 
// When the user click to the link, retrieve the feedback information from the cookie and display it on the page also include a link on the feedback details page to Logout.When the user clicks the link, user redirected to home page. 
// Make simple.html file and app.js file use get method in express js. 

app.use(express.static(path.join(__dirname,"../public"),{index:"NewCookieForm.html"}));

app.post("/submitFeedback",(req,res)=>{
    const obj=req.body;
    res.status(200).set("content-type","text/html");
    // res.cookie("feedback",{name:obj.name,email:obj.email,msg:obj.message,rating:obj.rating},{expires:new Date(Date.now()+10000)});
    res.cookie("feedback",{name:obj.name,email:obj.email,msg:obj.message,rating:obj.rating},{maxAge:10000});
    res.write("Cookie set successfully");
    res.write("<h1><a href='/showFeedback'>Show Feedback</a></h1>");
    res.send();
});

app.get("/showFeedback",(req,res)=>{
    if(req.cookies.feedback){
        res.send(req.cookies.feedback);
    }else{
        res.send("Cookies have been removed");
    }
});

app.listen(3000,()=>{console.log("Server started on port 3000")});