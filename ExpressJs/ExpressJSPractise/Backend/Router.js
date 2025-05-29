// const express=require("express");
// const app=express();
// const api=require("./RESTfulAPI");

// app.use("/api",api);

// app.listen(3000, () => { console.log("Server started on port 3000.") })

const express = require("express");
const app = express();

const api=require("./program");

app.use("/api",api);
app.listen(4000, () => { console.log("Server started on port 4000") });