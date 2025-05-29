// const express = require("express");
// const app = express();

// // Write an express.js script to define one JSON array of 3 objects having members ‘name’ and ‘score’. score must be sorted descending order according to name.
// const arrayObject=[
//     {
//         name: "ABC",
//         score: 1000
//     },
//     {
//         name: "DEF",
//         score: 150
//     },
//     {
//         name: "BCD",
//         score: 200
//     },
//     {
//         name: "XYZ",
//         score: 250
//     },
//     {
//         name: "AABC",
//         score: 300
//     },
//     {
//         name: "DEGH",
//         score: 900
//     },
// ]

// app.get("/",(req,res)=>{
//     for(let i=0;i<arrayObject.length;i++){
//         for(let j=0;j<arrayObject.length;j++){
//             let temp='';
//             if(arrayObject[i].name<arrayObject[j].name){
//                 temp=arrayObject[i];
//                 arrayObject[i]=arrayObject[j];
//                 arrayObject[j]=temp;
//             }
//         }
//     }
//     res.send(arrayObject);
// });

// app.get("/maxAge",(req,res)=>{
//     let max=arrayObject[0].score;
//     let maxObj=arrayObject[0];

//     for(obj of arrayObject){
//         if(obj.score>max){
//             max=obj.score;
//             maxObj=obj;
//         }
//     }
//     res.send(maxObj);
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});

// const express = require("express");
// const app = express();
// const session = require("express-session");
// const path = require("path");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static((__dirname,"../Frontend")));

// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: "Hello"
// }));

// app.post("/savesession",(req,res)=>{
//     if(!req.session.username && !req.session.password && !req.session.gender){
//         req.session.username=req.body.uname;
//         req.session.gender=req.body.gender;
//         req.session.password=req.body.pwd;
//     }
//     res.redirect("/fetchsession");
// });

// app.get("/fetchsession",(req,res)=>{
//     res.set("content-type","text/html").status(200);
//     res.write(`<h1>Username: ${req.session.username}<h1>`);
//     res.write(`<h1>Gender: ${req.session.gender}<h1>`);
//     res.write(`<a href="/deleteSession">Logout<h1>`);
//     res.send();
// })

// app.get("/deleteSession",(req,res)=>{
//     req.session.destroy();
//     console.log("Session has been deleted successfully");
//     res.redirect("/");
// });

// app.get("/", (req, res) => {
//     // res.set("content-type","text/html").status(200);
//     // if(!req.session.count){
//     //     req.session.count=1;
//     // }else{
//     //     req.session.count++;
//     // }
//     // res.write("You have visited page "+req.session.count+" times");
//     // res.send();
//     // res.sendFile(path.join(__dirname, "../Frontend/index.html"))
// })

// app.listen(3000, () => { console.log("Server started on port 3000") });

const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");

const storage=multer.diskStorage({
    destination:"../upload",
    filename:(req,file,cb)=>{
        cb(null,"lju-file.pdf")
    }
});

const upload=multer({
    storage,
    fileFilter:(req,file,cb)=>{
        const validTypes=["image/png","image/jpeg"]
        if(!validTypes.includes(file.mimetype)){
            cb(new Error("Invalid File Type"),false);
        }else{
            cb(null,true);
        }
    }
})

app.set("view engine", "pug");
app.set("views",__dirname);
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render(path.join(__dirname, "file.pug"));
});
app.get("/home", (req, res) => {
    res.render("file");
});

app.post("/upload",upload.single('lju'),(req,res)=>{
    const file=req.file;
    res.send(file.originalname+" has been uploaded");
});

app.listen(3000, () => { console.log("Server started on port 3000") });

// const express = require("express");
// const router = express.Router();

// const emp = [
//     { id: 101, name: "ABC", year: 2025 },
//     { id: 102, name: "XYZ", year: 2025 }
// ]

// router.get("/", (req, res) => {
//     res.set("content-type", "text/html");
//     for (employee of emp) {
//         res.write(`<h1>Id: ${employee.id}, Name: ${employee.name}, Year: ${employee.year}</h1>`);
//     }
//     res.send();
// });

// router.get("/:id",(req,res)=>{
//     const data=emp.filter((e)=>e.id==req.params.id);
//     if(data.length>0){
//         res.send(data);
//     }else{
//         res.send("Not found!!!");
//     }
// })

// module.exports = router;

// const express = require("express");
// const app = express();
// // const session = require("express-session");
// // const path = require("path");

// app.set('view engine','pug');
// app.set("views",__dirname);

// app.get("/",(req,res)=>{
//     res.render("file");
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});