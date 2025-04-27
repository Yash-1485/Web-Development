require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MongoDBUrl);

const userSchema=mongoose.Schema({
    name: String,
    email: String,
    imgurl: String
});

module.exports = mongoose.model("user",userSchema);