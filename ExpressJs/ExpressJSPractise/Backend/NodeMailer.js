// Write a code to set up nodemailer in Express.js. Sender email id: “lju@gmail.com”. Receiver email ids: “student@gmail.com and faculty@gmail.com”. Mail subject should be “LJ University” Mail body contains “Welcome Student” in h3 tag and in table display data Date 28/06/23, Exam name FSD-2.
const nodeMailer = require("nodemailer");

const transport = nodeMailer.createTransport({
    port: 465,
    host: "smtp@gmail.com",
    auth: {
        user: "chinchpokli",
        pass: "12ka442ka1MyNameIsLakhan"
    }
});

const mailOptions = {
    from: "lju@gmail.com",
    to: ["student@gmail.com", "faculty@gmail.com"],
    subject: "LJ University",
    html: `<h3>Welcome Students</h3>
    <table border="1">
        <tr>
            <th>Date</th>
            <th>Exam</th>
        </tr>
        <tr>
            <td>28/06/23</td>
            <td>FSD-2</td>
        </tr>
    </table>
    `
}

transport.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error(err);
    } else {
        console.log(info);
    }
})