// const express = require("express");
// const app = express();
// const path = require("path");
// const multer = require("multer");
// Write express js script to perform the tasks as asked below.
// 1)Create one HTML file and add one form which contains username, password and submit button. Data should be submitted by HTTP post method.
// 2)Submit button is of black color with white text. (External CSS)
// 3)On home page form should be displayed and while submitting the form, on next page named “/login” if username is admin then it will display “Welcome admin” else display “Please login with admin name”.

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static((__dirname, "../pages")));

// app.post("/login", (req, res) => {
//     res.set("content-type","text/html").set(200);
//     const { uname, pwd } = req.body;

//     if(uname=="admin"){
//         res.write("<h1>Welcome admin<h1>");
//     }else{
//         res.write("<h1>Please login with admin name<h1>");
//     }
//     res.send();
// });

// app.listen(3000, () => { console.log("Server started on port 3000.") });

// Middleware

// app.use("/",(req,res,next)=>{
//     res.write("I am middleware 1\n");
//     next();
// })
// app.use("/",(req,res,next)=>{
//     res.write("I am middleware 2\n");
//     next();
// })
// app.use("/",(req,res,next)=>{
//     res.write("I am middleware 3\n");
//     next();
//     // res.send();
// })
// app.use("/",(req,res,next)=>{
//     res.write("I am middleware 4\n");
//     next();
// })
// app.get("/",(req,res)=>{
//     res.write("I am the last one");
//     res.send();
// })

// Write express js script to perform following tasks. 1. Create one html file which contains one text field for name, email field and checkbox for subscription. Html file will be loaded on home page. Email and name fields are required fields. 2. On login page welcome user and email id data should be printed. a. If user checked the subscription then “Thank you for the subscription” message will be printed and “logout” link will be displayed under the message. If user clicks logout link then he/she will be redirected to the home page. b. If user has not opted for the subscription then “You can subscribe to get daily updates” message will be printed and “subscribe” link will be displayed under the message. c. If user clicks subscribe link then he/she will be redirected to the subscription page. In this page “Thank you for the subscription” message will be printed and “logout” link will be displayed under the message. If user clicks logout link then he/she will be redirected to the home page. Use concept of the middleware and you can use any of http methods(get/post).

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static((__dirname, "../pages")));

// app.post("/login", (req, res, next) => {
//     res.set("content-type", "text/html");
//     let { name, email, subscription } = req.body;
//     res.write(`
//         <h3>User Details:</h3>
//         <p>Name:  ${name}</p>
//         <p>Email: ${email}</p>
//         `);
//     next();
// });

// app.post("/login", (req, res) => {
//     subscription=req.body.subscription;
//     subscription == "on" ? true : false;
//     if (subscription) {
//         res.write(`<h1>Thank you for subscription</h1>`);
//         res.write(`<a href="/">Logout</a>`);
//     } else {
//         res.write(`<h1>You can subscribe to get daily updates</h1>`);
//         res.write(`<a href="/subscribe">Subscribe</a>`);
//     }
//     res.send();
// });

// app.get("/subscribe", (req, res) => {
//     res.set("content-type", "text/html").status(200);
//     res.write("<h1>Thank you for subscription</h1>");
//     res.write(`<a href="/">Logout</a>`);
//     res.send();
// });

// app.listen(3000, () => { console.log("Server started on port 3000") });

// Write an express.js script to load an HTML file having username and password and submit button. On clicking submit button. It should jump on "check" page using "POST" method. If username is "admin" , then jump on next middleware to print "welcome… admin" , if username is not "admin" , then stay on same middleware to print "warning msg" in red color.

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(express.static((__dirname,"../pages")));

// app.post("/check",(req,res,next)=>{
//     res.set("content-type","text/html");
//     if(req.body.uname=="admin"){
//         next();
//     }else{
//         res.write("<h1 style='color: red;'>warning msg</h1>")
//         res.send();
//     }
// });

// app.post("/check",(req,res)=>{
//     res.set("content-type","text/html");
//     res.write("<h1 style='color: green'>welcome... admin</h1>");
//     res.send();
// })

// app.set("view engine", "pug");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const object = {
//     message: "Hello, I am a message from ExpressJS",
//     name: "expressjs",
//     id: 109
// }

// app.get("/", (req, res) => {
//     res.render(path.join(__dirname, "index.pug"),{object:object});
//     // res.render(path.join(__dirname, "index.pug"),object);
// });

// app.post("/data", (req, res) => {
//     res.render(path.join(__dirname,"data.pug"),{object:req.body});
// })

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static((__dirname, "../pages")));

// const storage = multer.diskStorage({
//     destination: path.join(__dirname, "../upload"),
//     filename: (req, file, cb) => {
//         // cb(null, file.originalname)
//         cb(null, file.fieldname+"_"+Date.now()+path.parse(file.originalname).ext);
//     }
// })

// const upload = multer({ storage });

// app.post("/file", upload.single("file") ,(req, res) => {
//     const uploadedFile=req.file;
//     res.set("content-type","text/html").status(200);
//     res.write(`<h1 style='color: green'>${uploadedFile.filename} has been successfully uploaded to ${uploadedFile.destination} folder as ${uploadedFile.filename}</h1>`);
//     res.send();
// });

// app.post("/file", upload.array("file", 5), (req, res) => {
//     const files = req.files;
//     res.set("content-type", "text/html").status(200);
//     files.forEach(file=>{
//         res.write(`<p style='color: green'>${file.filename} has been successfully uploaded to ${file.destination} folder as ${file.filename}</p>`);
//     })
//     res.send();
// });

// app.listen(3000, () => { console.log("Server started on port 3000") });

// Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit button using get method.1) After clicking submit button the content of submitted details should be represented on “/login” page along with one “show vowel” link.2) By clicking “show vowel” link count of vowel used in submitted “message” will display on “/message” page. (Use next() to route page)

// 223
// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use(express.static((__dirname, "../Frontend")));

// let content={}

// app.get("/login", (req, res) => {
//     const { uname, pwd, msg } = req.query;
//     content=req.query;
//     console.log(content);
//     res.set("content-type","text/html").set(200);
//     res.write(`<h1>Username: ${uname}</h1>`);
//     res.write(`<h1>Password: ${pwd}</h1>`);
//     res.write(`<h1>Message: ${msg}</h1>`);
//     res.write("<a href='/message'>Show Vowel</a>");
//     res.send();
// });

// app.get("/message",(req,res,next)=>{
//     req.msg=content.msg;
//     next();
// });

// app.get("/message",(req,res)=>{
//     res.set("content-type","text/html").set(200);
//     let vowelCount=0;
//     for(let i=0;i<req.msg.length;i++){
//         let char=req.msg[i].toLowerCase();
//         if(['a','e','i','o','u'].includes(char)){vowelCount++;}
//     }
//     res.write("Vowel Count: "+vowelCount);
//     res.send();
// });

// app.listen(3000, () => { console.log("Server started on port 3000.") });

// 225
// Write expressJS script to perform task as asked:(A) Create one HTML file which contains text-field named username, one dropdown which contains options of country like India, USA, Canada, Australia. & one submit button.(B) Once user clicked on submit button it will jump to next page than username & You are from “country name” which ever selected from drop box should be printed.(C) Use get method to request data.
const express = require("express");
const app = express();
const cp=require("cookie-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static((__dirname, "../pages"),{index:"Login.html"}));
app.use(cp());
// app.get("/nextPage", (req, res) => {
//     const { uname, country } = req.query;
//     res.set("content-type", "text/html").status(200);
//     res.write(`<h1>Username: ${uname}<h1>`);
//     res.write(`<h1>You are from ${country}<h1>`);
//     res.send();
// });

// app.post("/data",(req,res)=>{
//     res.write(JSON.stringify(typeof(req.body.ck)));
//     res.send();
// })

app.post("/data",(req,res)=>{
    res.cookie("feedback",{name:req.body.name,email:req.body.email,msg:req.body.msg,rating:req.body.rating});
    res.send("<a href='/feedback'>Feedback</a>")
})

app.get("/feedback",(req,res)=>{
    res.send(req.cookies)
});



app.listen(3000, () => { console.log("Server started on port 3000"); })