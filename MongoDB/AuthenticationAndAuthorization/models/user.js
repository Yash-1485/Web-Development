require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MongoDBUrl).then(() => { console.log("Database connection established successfully"); return;}).catch(err => { console.error(err) });

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});

module.exports = mongoose.model("user", userSchema);