const express = require("express");
const app = express();

const path = require("path");
const bcrypt = require("bcrypt");
const cp = require("cookie-parser");
const userModel = require("./models/user");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cp());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
        res.send("Something went wrong");
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            const token = jwt.sign({ email }, "secret");
            res.cookie("token", token);
            res.redirect("/homepage");
        }
        else {
            res.send("Something went wrongg");
        }
    });
});

app.post("/signupAndRegister", (req, res) => {
    const { name, age, email, password } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            const user = await userModel.create({
                name,
                age,
                email,
                password: hash
            });
            res.redirect("/");
        });
    });
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/homepage", async (req, res) => {
    const tokenObject = jwt.verify(req.cookies.token, "secret");

    const user = await userModel.findOne({email:tokenObject.email});
    res.render("homepage",{user});
});

app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/");
})

app.listen(3000, () => { console.log("Server started on port 3000.") });