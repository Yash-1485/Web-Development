const express = require("express");
const userModel = require("./usermodel");
const usermodel = require("./usermodel");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Create Operation
app.get("/create", async (req, res) => {
    const createdUser = await userModel.create({
        userid: 1,
        username: "Pooja",
        name: "Pooja Arunbhai Parekh",
        email: "pooja@gmail.com"
    });

    res.send(createdUser);
});

// Read Operation
app.get("/read", async (req,res)=>{
    const userArray = await userModel.find();
    res.send(userArray);
});

// Update Operation
app.get("/update",async (req,res)=>{
    const updatedUser = await userModel.findOneAndUpdate({username: "Pooja"},{"userid":"2"},{new:true});
    res.send(updatedUser);
});

// Delete Operation
app.get("/delete",async (req,res)=>{
    const deletedUser= await usermodel.findOneAndDelete({userid:2});
    res.send(deletedUser);
});

app.listen(3000, () => { console.log("Server started on port 3000"); });