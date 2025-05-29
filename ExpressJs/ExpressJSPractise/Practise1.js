const express = require("express");
const cp = require("cookie-parser");
const app = express();

// app.get("/",(req,res)=>{
//     res.send("Hello World!");
// });

const student = {
    name: "Yash",
    age: 19
}

const students = [
    {
        name: "ABC",
        age: 19
    },
    {
        name: "BCD",
        age: 21
    },
    {
        name: "XYZ",
        age: 20
    },
]

// app.get("/",(req,res)=>{
//     // res.send (student);
//     res.json(student);
// });

// app.get("/age",(req,res)=>{
//     // res.send("Student age: "+student.age);
//     res.send(student.age+"");
// });

// app.get("/jsonAge",(req,res)=>{
//     // res.send("Student age: "+student.age);
//     res.json(student.age);
// });

// app.post("/",(req,res)=>{
//     res.send("Hello World!");
// });

// app.get("/",(req,res)=>{
//     res.set("content-type","text/html").status(200);
//     let table="<table border='1'><tr><th>Name</th><th>Age</th></tr>"
//     students.forEach(student=>{
//         table+=`<tr><td>${student.name}</td><td>${student.age}</td></tr>`;
//     });
//     table+="</table>"
//     res.send(table);
// });

// app.get("/",(req,res)=>{
//     res.send(students);
// });

// app.get("/sortedNames",(req,res)=>{
//     const sortedStudents=students.sort((a,b)=>b.age-a.age);
//     sortedStudents.forEach(student=>{
//         res.write(student.name+", "+student.age+"\n");
//     });
//     res.send();
// });

// app.get("/sortPage",(req,res)=>{
//     const sortedStudents=students.sort((a,b)=>b.age-a.age);
//     sortedStudents.forEach(student=>{
//         res.write(student.age+"\n");
//     });
//     res.send();
// });

// app.get("/process_get",(req,res)=>{
//     // res.send(req.query);

//     data=req.query.message.split(".");
//     data.forEach(msg=>{
//         res.write(msg+"\n");
//     })
//     res.send();
// });

// Write express js script to perform tasks as asked below. 1. Create one HTML file which contains two number type input fields, one dropdown which contains options like (select, addition, subtraction, multiplication, division) and one submit button. 2. The input fields must contain the value greater than 0 else it will give a message “Please enter the valid number”. Also, user must select any of the formula from the dropdown else give a message “You have not selected any formula”. (Message will be displayed on “/calc” page.) 3. If one formula is selected and numbers are entered then respective calculations will be performed on the page “/calc”. 4. Use get method to request data.
app.use(cp());
app.use(express.static(("pages")));
app.get("/calc", (req, res) => {
    let { num1, num2, opt } = req.query;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let ans=0
    if(num1<=0 || num2<=0){
        ans="Please enter the valid number.";
    }else if(opt=="select"){
        ans="You have not selected any formula";
    }else{
        switch(opt){
            case '+':{
                ans=num1+num2;
                break;
            }
            case '-':{
                ans=num1-num2;
                break;
            }
            case '*':{
                ans=num1*num2;
                break;
            }
            case '/':{
                ans=num1/num2;
                break;
            }
            case '%':{
                ans=num1%num2;
                break;
            }
            case '**':{
                ans=num1**num2;
                break;
            }
            default:{
                ans="Invalid Operation";
            }
        }
        ans=`${num1} ${opt} ${num2} = `+ans
    }
    res.cookie("Number1",num1,{maxAge:50000});
    res.cookie("Number2",num2,{maxAge:50000});
    res.send(ans);
});

// Write an express js script to set cookies of submitted values of form. Perform following tasks.
// • Create a HTML file which contains a form with fields first name, last name, password and a submit button.
// • Once form submitted, store all these entered values to the respective cookies on ‘/next’ page.
// • Then redirect user to “/admin” page and clear the cookie set for the last name. Display remaining set cookie values on this page. (Using post method)
// app.use(express.urlencoded({extended:true}));
// app.use(cp());
// app.use(express.static("pages",{index:"cookieForm.html"}))
// app.post("/next", (req, res) => {
//     const { fname, lname, pwd } = req.body;

//     res.cookie("First_Name", fname);
//     res.cookie("Last_Name", lname);
//     res.cookie("Password", pwd);
//     res.redirect("/admin");
// });

// app.get("/admin",(req,res)=>{
//     res.clearCookie("First_Name");
//     res.send(req.cookies);
// })

// app.listen(3000, () => { console.log("Server started on port 3000"); });