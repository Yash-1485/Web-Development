// ExpressJS
const express = require("express");

const app = express();

// app.get("/",(req,res)=>{
//     // res.write("Hello World!");
//     res.set('content-type','text/html');
//     res.write("This is home page");
//     res.send();
// });

// app.get("/about",(req,res)=>{
//     res.set('content-type','text/html');
//     res.write("<h1>This is about page</h1>");
//     res.send();
// });

// // else case
// app.get("*",(req,res)=>{
//     res.status(404);
//     res.send("Page not found");
// });
// app.listen(3000,()=>{console.log("Server started on port 3000")});

// Route Params
// app.get("/:id",(req,res)=>{
//     res.send("One value is: "+req.params.id);
// });

// app.get("/:id/:name",(req,res)=>{
//     res.send("Two values are: "+req.params.id+" "+req.params.name);
// });

// app.get("/things/:id/:name",(req,res)=>{
//     res.send("Things are: "+req.params.id+" "+req.params.name);
// });

// app.get("/user/:uid/name/:name",(req,res)=>{
//     res.send("UserId: "+req.params.uid+" Name:"+req.params.name);
// });

// WAP to request server to display json object values on browser.

// const jsonObj={
//     "name":"Shrey",
//     "rollno":"33",
//     "subject":"FSD",
//     "marks":"100"
// }

// app.get("/jsonObj/:name/:rollno/:subject/:marks",(req,res)=>{
//     // res.json(req.params);
//     res.write("Name:"+req.params.name+"\n");
//     res.write("RollNo:"+req.params.rollno+"\n");
//     res.write("Subject:"+req.params.subject+"\n");
//     res.write("Marks:"+req.params.marks+"\n");
//     res.send();
// });

// Display array of objects in table form on browser

// const jsonObj=[
//     {
//         "name":"Shrey",
//         "marks":"100"
//     },
//     {
//         "name":"Dhiraj",
//         "marks":"100"
//     },
//     {
//         "name":"Jay",
//         "marks":"100"
//     },
//     {
//         "name":"Tirth",
//         "marks":"100"
//     },
// ]

// app.get("/arrObj",(req,res)=>{
//     res.status(200);
//     res.set("content-type","text/html");
//     let table="<table border='1'><tr><th>Name</th><th>Marks</th></tr>";
//     jsonObj.forEach(obj=>{
//         table+=`<tr>
//             <td>${obj.name}</td>
//             <td>${obj.marks}</td>
//         </tr>`
//     });
//     table+='</table>'
//     res.write(table);
//     res.send();
// });

// Sort array of objects age wise, sorted age 

// const jsonObj=[
//     {
//         "name":"Shrey",
//         "age":"90"
//     },
//     {
//         "name":"Jay",
//         "age":"20"
//     },
//     {
//         "name":"Dhiraj",
//         "age":"50"
//     },
//     {
//         "name":"Tirth",
//         "age":"21"
//     },
// ];

// const sortArr=(arr)=>{
//     return [...arr].sort((a,b)=>b.age-a.age);
// }

// app.get("/",(req,res)=>{
//     // res.json(jsonObj);
//     res.write(JSON.stringify(jsonObj,null,4));
//     res.send();
// });


// app.get("/sort",(req,res)=>{
//     const sortedObj=sortArr(jsonObj);
//     // res.json(sortedObj);
//     res.write(JSON.stringify(sortedObj,null,4));
//     res.send();
// });

// app.use(path,callback)
// res.sendFile()
// Using Middlewear

// Middlewear, default
// app.use(express.static(__dirname));
// app.use(express.static("public/html"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/html/index.html");
});

app.get("/test",(req,res)=>{
    res.sendFile(__dirname+"/public/html/test.html");
});

app.listen(3000,()=>{console.log("Server started on port 3000")});