// require("dotenv").config();
// var nm = require("nodemailer");

// const senderMail=process.env.sender_Mail;
// const passkey=process.env.pass_key;
// const receiverMail=process.env.receiver_Mail;

// var trans = nm.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     auth: {
//         user: senderMail,
//         pass: passkey
//     }
// });

// var mailoption = {
//     from: senderMail,
//     to: receiverMail,
//     subject: "Testing Mail from NodeJS",
//     text: 'This is a testing mail from NodeJS->Node Mailer',
//     html: 'Testing node mailer, <h1>Effect of h1</h1>',
// };

// trans.sendMail(mailoption, (err, info) => {
//     if (err) {
//         console.error(err);
//     }else{
//         console.log(info,"Mail was sent successfully");
//     }
// });

// Sending mail through html page
// const express = require("express");
// const app = express();
// var nm = require("nodemailer");
// const path = require("path");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public"), { index: "EmailForm.html" }));

// app.post("/emailPage", (req, res) => {
//     const { email, subject, body } = req.body;

//     var trans = nm.createTransport({
//         host: "smtp.gmail.com",
//         port: 465,
//         auth: {
//             user: "sender@gmail.com",
//             pass: "App Password"
//         }
//     });

//     var mailoption = {
//         from: "sender@gmail.com",
//         to: email,
//         // cc:,
//         // bcc:[],
//         subject: subject,
//         text: body,
//         html: 'Testing node mailer, <h1>Effect of h1</h1>',
//         // attachments: [{filename: "hello.txt",path:"path"}]
//     };

//     trans.sendMail(mailoption, (err, info) => {
//         if (err) {
//             console.error(err);
//         }
//         console.log(info);

//     });

//     console.log(email, subject, body);
//     res.send({email,subject,body});
// });

// app.listen(3000,()=>{console.log("Server started at port 3000.")});

// Sending mail through app
require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
const nm = require("nodemailer");

const senderMail = process.env.sender_Mail;
const passkey = process.env.pass_key;
const receiverMail = process.env.receiver_Mail;

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"), { index: "EmailForm.html" }));

app.get("/",(req,res)=>{
    res.render("EmailForm");
});

app.post("/emailPage", (req, res) => {
    const { email, subject, body } = req.body;

    const transport = nm.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: senderMail,
            pass: passkey
        }
    });

    const mailOption = {
        from: senderMail,
        to: email,
        subject,
        text: body,
    }

    transport.sendMail(mailOption, (err, info) => {
        if (err) {
            console.error(err);
            res.send();
        } else {
            res.redirect("/success");
        }
    });
});

app.get("/success", (req, res) => {
    res.render("success");
});

app.listen(3000, () => {
    console.log("Server has been started on port 3000");
});