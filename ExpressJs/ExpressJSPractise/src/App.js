const express = require("express");
const path = require("path");

const app = express();

// app.use(express.static("public"));
// app.use(express.static("../public",{index:"test.html"}));

// app.get("/index",(req,res)=>{
//     res.sendFile(path.join(__dirname,"../public/index.html"));
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});

// Create 1 folder backend and 1 folder frontend, create 1 html and  1 css in frontend folder and create 1 js file backend folder. In html file print one para, format the paragraph using css file run that html file as a frontend as server


// HTTP Methods
// get
// post

// app.use(express.static(path.join(__dirname,"../public"),{index:"Form.html"}));

// app.get("/process_get",(req,res)=>{
//     // res.send(req.query);
//     const fname=req.query.fname;
//     const lname=req.query.lname;
//     res.set("content-type","text/html").status(200);
//     res.write("Welcome: ");
//     res.write(`<h1 style="color: yellow; background-color: grey;">${fname}<h1>`);
//     res.write(`<h1 style="color: yellow; background-color: grey;">${lname}<h1>`);
//     res.send();
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});

// Write express script to get form data using get method and display data in json format in next page named second_page

// app.use(express.static(path.join(__dirname,"../public"),{index:"Form.html"}));

// app.get("/second_page",(req,res)=>{
//     res.send(req.query);
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});

// To print message in next line splitting by comma and use get method to submit the data html file contains textarea field for the message and submit btn

// app.use(express.static(path.join(__dirname,"../public"),{index:"secondForm.html"}));

// app.get("/msg",(req,res)=>{
//     let txt=req.query.txt;
//     txt=txt.split(",");
//     txt.forEach(ele => {
//         res.write(ele+"\n");
//     });
//     res.send();
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});

// Post Method
// const bp=require("body-parser");
// const url=bp.urlencoded({extended:true});

// app.use(express.static(path.join(__dirname,"../public"),{index:"thirdForm.html"}));

// app.post("/process_get",url,(req,res)=>{
//     res.set("content-type","text/html").status(200);
//     res.write(`<h1 style="display: inline;">Welcome: </h1>`);
//     res.write(`<h1 style="color: red; background-color: beige;">${req.body.fname}<h1>`);
//     res.write(`<h1 style="color: red; background-color: beige;">${req.body.lname}<h1>`);
//     res.write(JSON.stringify(req.body,null,4));
//     res.send();
// });

// app.listen(3000,()=>{console.log("Server started on port 3000")});

// Write express js script to perform tasks as asked below.
// 1.	Create one HTML file which contains two number type input fields, one dropdown which contains options like (select, addition, subtraction, multiplication, division) and one submit button. 
// 2.	The input fields must contain the value greater than 0 else it will give a message “Please enter the valid message”. Also, user must select any of the formula from the dropdown else give a message “You have not selected any formula”. (Message will be displayed on “/calc” page.)
// 3.	If one formula is selected and numbers are entered then respective calculations will be performed on the page “/calc”. 
// 4.	Use post method to request data.

const bp=require("body-parser");
const url=bp.urlencoded({extended:true});

app.use(express.static(path.join(__dirname,"../public"),{index:"fourthForm.html"}));

app.post("/calc",url,(req,res)=>{
    // res.write(JSON.stringify(req.body,null,4));
    const obj=req.body;
    res.status(200).set("content-type","text/plain");
    const num1=parseInt(obj.num1);
    const num2=parseInt(obj.num2);
    const opt=obj.selectedOpt;

    if(num1<0 || num2<0){
        res.write("Numbers should be greater than zero.");
    }else if(opt=="nothing"){
        res.write("Kindly select any one of the 5 operations.");
    }else{
        res.write("Number1:"+num1+"\n");
        res.write("Number2:"+num2+"\n");
        res.write("Selected Operation is: "+opt+"\n");
        switch(opt){
            case "+":{
                res.write("Addition is: "+JSON.stringify(num1+num2));
                break;
            }
            case "-":{
                res.write("Subtraction is: "+JSON.stringify(num1-num2));
                break;
            }
            case "*":{
                res.write("Multiplication is: "+JSON.stringify(num1*num2));
                break;
            }
            case "/":{
                res.write("Division is: "+JSON.stringify(num1/num2));
                break;
            }
            case "%":{
                res.write("Modulation is: "+JSON.stringify(num1%num2));
                break;
            }
        }
    }
    res.send();
});

app.listen(3000,()=>{console.log("Server started on port 3000")});