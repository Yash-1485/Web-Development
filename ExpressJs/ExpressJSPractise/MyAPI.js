// RESTful API
const express = require("express");
// const app = express();
const router = express.Router();

const data = [
    { id: 101, name: "ABC", branch: "CSE", contact: 9876543210, city: "Ahmedabad" },
    { id: 102, name: "BCD", branch: "CE", contact: 9876543210, city: "Ahmedabad" },
    { id: 103, name: "XYZ", branch: "CSE", contact: 9876543210, city: "Rajkot" },
    { id: 104, name: "PQR", branch: "IT", contact: 9876543210, city: "Ahmedabad" },
    { id: 105, name: "ABC", branch: "CSE", contact: 9876543210, city: "Surat" },
    { id: 106, name: "ABC", branch: "IT", contact: 9876543210, city: "Rajkot" }
]

router.get("/", (req, res) => {
    res.set("content-type", "text/html").status(200);
    for (i of data) {
        res.write("<h3>ID: " + JSON.stringify(i.id) + ", Name: " + i.name + ", Branch: " + i.branch + ", Contact: " +
            i.contact + ", City: " + i.city + "</h3>");
    }
    res.send();
});

// RegEx used in () braces
router.get("/id/:id([0-9]{3,})", (req, res) => {
    var current_data = data.filter((i1) => i1.id == req.params.id)
    if (current_data.length >= 1) {
        res.send(current_data);
    } else {
        res.send("Not Found");
    }
});

router.get("/branch/:branch", (req, res) => {
    var current_data = data.filter((b) => b.branch.toLowerCase() == req.params.branch)
    if (current_data.length >= 1) {
        res.send(current_data);
    } else {
        res.send("Not Found");
    }
});

router.get("/city/:city", (req, res) => {
    var current_data = data.filter((b) => b.city.toLowerCase() == req.params.city)
    if (current_data.length >= 1) {
        res.send(current_data);
    } else {
        res.send("Not Found");
    }
});

module.exports = router;