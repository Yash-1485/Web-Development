const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = [
    { id: 101, name: "ABC", branch: "CSE", contact: 9876543210, city: "Ahmedabad" },
    { id: 102, name: "BCD", branch: "CE", contact: 9876543210, city: "Ahmedabad" },
    { id: 103, name: "XYZ", branch: "CSE", contact: 9876543210, city: "Rajkot" },
    { id: 104, name: "PQR", branch: "IT", contact: 9876543210, city: "Ahmedabad" },
    { id: 105, name: "ABC", branch: "CSE", contact: 9876543210, city: "Surat" },
    { id: 106, name: "ABC", branch: "IT", contact: 9876543210, city: "Rajkot" }
]

router.get("/", (req, res) => {
    // res.set("content-type","text/html").status(200);
    // for(i of data){
    //     res.write("<h3>ID: "+ JSON.stringify(i.id) + ", Name: " + i.name + ", Branch: " + i.branch + ", Contact: " + i.contact + ", City: " + i.city + "</h3>");
    // }
    res.send(data);
});

router.get("/id/:id",(req,res)=>{
    const obj=data.filter((obj)=>obj.id==req.params.id);
    if(obj.length>0){
        res.send(obj);
    }else{
        res.send("Not found!!!");
    }
});

router.get("/branch/:branch",(req,res)=>{
    const obj=data.filter((obj)=>obj.branch.toLowerCase()==req.params.branch.toLowerCase());
    if(obj.length>0){
        res.send(obj);
    }else{
        res.send("Not found!!!");
    }
});

module.exports=router;