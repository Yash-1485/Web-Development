const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.set("content-type", "application/json");
    console.log("Middleware 1: Setting Content Type");
    next();
})

app.use((req, res, next) => {
    res.status(200);
    req.query.name = "Yash"; // Errorneuos line
    console.log("Middleware 2: Setting Status Code");
    next();
})

app.get("/", (req, res, next) => {
    if (req.query.name) {
        const error = new Error("Something went wrong!!!");
        error.status = 404;
        return next(error);
    }
    res.json({
        success: true,
        message: "Everything is okay"
    });
});

app.use((err, req, res, next) => {
    console.log("Error Handling Middleware:", err.message);
    res.json({
        success: false,
        message: err.message
    });
});

app.listen(3000, () => { console.log("Server started...") });