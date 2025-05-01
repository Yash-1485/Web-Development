const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginAndSignUp");

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("user", userSchema);