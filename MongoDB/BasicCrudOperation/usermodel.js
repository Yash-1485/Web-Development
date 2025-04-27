require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MongoDBUrl);
// .then((value)=>console.log("Database Connection Established")).catch((err)=>{console.log("Database Connection Failed")});
const usermodel=mongoose.Schema({
    userid: Number,
    username: String,
    name: String,
    email: String
});

module.exports = mongoose.model("user",usermodel);