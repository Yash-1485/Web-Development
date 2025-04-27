const express = require("express");
const user = require("./models/user");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("index");
});

app.post("/create", async (req, res) => {
    const { name, email, imgurl } = req.body;
    await user.create({ name, email, imgurl });
    res.redirect("/read");
});

app.get("/read", async (req, res) => {
    const users = await user.find();
    res.render("read", { users });
});

app.get("/edit/:id", async (req, res) => {
    const oneUser = await user.findOne({_id: req.params.id});
    res.render("edit",{user: oneUser});
});

app.post("/update/:id", async (req, res) => {
    const { name, email, imgurl } = req.body;
    await user.findOneAndUpdate({_id: req.params.id},{name,email,imgurl},{new: true});
    res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
    const uid=req.params.id;
    await user.findOneAndDelete({_id: uid});
    res.redirect("/read");
});

app.listen(3000, () => { console.log("Server started on port 3000"); });