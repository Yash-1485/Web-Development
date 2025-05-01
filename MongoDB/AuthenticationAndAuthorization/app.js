const express = require("express");
const app = express();

const user = require("./models/user");
const path = require("path");
const cp = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cp());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/create", (req, res) => {
    const { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            const createdModel = await user.create({
                username,
                email,
                password: hash,
                age
            });
            const token = jwt.sign({ email }, "secret");
            res.cookie("token", token);
            res.redirect("/");
        });
    });
    // res.send(createdModel);
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/loginUser", async (req, res) => {
    const exUser = await user.findOne({ email: req.body.email });
    if(!exUser){
        res.send("Something went wronggg");
    } 
    else{
        bcrypt.compare(req.body.password,exUser.password,(err,result)=>{
            if(!result) res.send("Something went wrongg");
            else{
                const token = jwt.sign({ email: user.email }, "secret");
                res.cookie("token", token);
                res.send("User login successfully");
            }
        })
    }
});

app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.send("Logout successfully");
});

app.listen(3000, () => { console.log("Server started on port 3000") });