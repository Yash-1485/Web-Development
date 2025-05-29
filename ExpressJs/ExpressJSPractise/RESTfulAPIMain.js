const express = require("express");
const app = express();
const api = require("./MyAPI");

app.get("/",(req,res)=>{
    res.send("Welcome to the homepage. Write /api to see all data");
})

app.use("/api", api);
app.listen(3000, () => { console.log("Server stareted on port 3000.") });