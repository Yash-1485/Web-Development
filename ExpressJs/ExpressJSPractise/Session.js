const express = require("express");
const app = express();

const path=require("path");
const cp = require("cookie-parser");
const session = require("express-session");

// app.use(session({
//     // resave: false,
//     resave: true,
//     saveUninitialized: true,
//     secret: "Hello",
//     cookie: { maxAge: 20000 }
// }));

// app.get("/", (req, res) => {
//     if (!req.session.fname) {
//         req.session.fname = "Yash";
//         res.redirect("/fetchSession");
//         // res.send(`<h1 style="color:blue;"> You have visited page ${req.session.page_views} times <h1>`);
//     }
//     else {
//         // req.session.page_views = 1;
//         // res.send(`<h1 style="color:green;"> Welcome! Thank you for visiting our website!<h1>`);
//         console.log("Session is already set.");
//     }
//     res.send();
// });

// app.get("/fetchSession",(req,res)=>{
//     res.set("content-type","text/html").status(200);
//     res.write(
//         `<h1>
//             Welcome ${req.session.fname}
//         </h1>`);
//     res.write(`<a href="/deleteSession">Delete Session</a>`);
//     res.send();
// });

// app.get("/deleteSession",(req,res)=>{
//     req.session.destroy();
//     res.send("Session Deleted");
// });

// app.listen(3000, () => { console.log("Server started on port 3000"); });

// Write express script to main session and print how many times user delete the page

// app.use(session({
//     // resave: false,
//     resave: true,
//     saveUninitialized: true,
//     secret: "Hello",
//     // cookie: { maxAge: 20000 }
// }));

// app.get("/",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//         res.send(`<h1 style="color:blue;"> You have visited page ${req.session.count} times <h1>`);
//     }
//     else{
//         req.session.count=1;
//         res.send(`<h1 style="color:green;"> Welcome! Thank you for visiting our website!<h1>`);
//     }
// });

// app.listen(3000, () => { console.log("Server started on port 3000"); });

// write a script to meet following requirements:
// • Create index.html file page which contains form(username,password,login button). and open it on
// localhost.
// • After clicking submit button, it should jump on “savesession” page. Store username and password in
// session.
// • After saving session, redirect to “fetchsession” page and read value. Put a LOGOUT link button here.
// • Jump on delete session page after clicking LOGOUT button.
// • Destroy the session on this page and redirect to index.html page.

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public"),{index:"SessionForm.html"}));

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"Login"
}));

app.post("/saveSession",(req,res)=>{
    if(!req.session.username & !req.session.password){
        req.session.username=req.body.username;
        req.session.password=req.body.password;
    }else{
        console.log("Session have already been stored");
    }
    res.redirect("/fetchSession");
    // res.send();
});

app.get("/fetchSession",(req,res)=>{
    res.write(`<h1 style="color:green;">Username: ${req.session.username}</h1>`);
    res.write(`<h1 style="color:green;">Password: ${req.session.password}</h1>`);
    res.write(`<a href="/logout" style="color:blue;">Logout</a>`);
    res.send();
});

app.get("/logout",(req,res)=>{
    req.session.destroy();
    console.log("Session has been destroyed");
    res.redirect("/");
});

app.listen(3000,()=>{
    console.log("Server started on port 3000");
});