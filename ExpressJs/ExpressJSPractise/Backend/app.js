const expr = require("express");
const app = expr();
const student = [{ name: "ABC", age: 28 }, { name: "PQR", age: 31 }, { name: "XYZ", age: 20 }];
const cb=(req,res,next)=>{ res.write("<p>First</p>");next(); }
const cb1=(req,res,next)=>{ res.write("<p>Second</p>");next(); }
app.use("/test",cb);app.get("/test",(req,res)=> { res.write("<p>Third</p>");res.send(); });
app.listen(6001);