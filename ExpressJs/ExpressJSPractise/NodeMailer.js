// var nm = require("nodemailer");
// var trans = nm.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     auth: {
//         user: "sender@gmail.com",
//         pass: "App Password"
//     }
// });

// var mailoption = {
//     from: "sender@gmail.com",
//     to: "receiver1@gmail.com,receiver2@gmail.com",
//     subject: "Hello",
//     text: 'Test mail',
//     html: 'Testing node mailer, <h1>Effect of h1</h1>'
// };

// trans.sendMail(mailoption, (err, info) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log(info);
// });

// Sending mail through html page
const express = require("express");
const app = express();
var nm = require("nodemailer");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"), { index: "EmailForm.html" }));

app.post("/emailPage", (req, res) => {
    const { email, subject, body } = req.body;

    // var trans = nm.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 465,
    //     auth: {
    //         user: "sender@gmail.com",
    //         pass: "App Password"
    //     }
    // });

    // var mailoption = {
    //     from: "sender@gmail.com",
    //     to: email,
    //     cc:,
    //     bcc:[],
    //     subject: subject,
    //     text: body,
    //     html: 'Testing node mailer, <h1>Effect of h1</h1>',
    //     attachments: [{filename: "hello.txt",path:"path"}]
    // };

    // trans.sendMail(mailoption, (err, info) => {
    //     if (err) {
    //         console.error(err);
    //     }
    //     console.log(info);
    //
    // });

    // console.log(email, subject, body);
    res.send({email,subject,body});
});

app.listen(3000,()=>{console.log("Server started at port 3000.")});