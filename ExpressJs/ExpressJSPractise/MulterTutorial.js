// Multer - Used for uploading file using form
// Only use post method for sending files from html form
const express = require("express");
const app = express();

const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"), { index: 'MulterForms.html' }));

const storage = multer.diskStorage(
    {
        destination: "upload", // Path where all files will be stored
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        },
    }
);

// const storage=multer.diskStorage(
//     {
//         destination:"upload", // Path where all files will be stored
//         filename: (req,file,cb)=>{
//             cb(null, file.originalname)
//         }
//     }
// );

// In cb() => First argument is for error

const maxsize = 1024 * 1024 * 1; // 1024 -> KB * 1024 -> MB -> *1 => Means will accept upto 1MB data
// // To upload single file

const filter = (req,file,cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg") {
        cb(null, true);
    } else {
        cb(new Error("File type should be from .jpeg, .jpg, .png"), false);
    }
}

var upload = multer({
    storage: storage,
    limits: {
        fileSize: maxsize
    },
    fileFilter: filter,
}).single("mypic");

// var upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: maxsize
//     },
//     fileFilter:(req,file,cb)=>{
//         if(file.mimetype=="image/png"||file.mimetype=="image/jpeg"||file.mimetype=="image/jpg"){
//             cb(null,true);
//         }else{
//             cb(null,false);
//         }
//     },
// }).single("mypic");
// in single(fieldname)-> name given in form

// To upload multiple files
// var upload = multer({ 
//     storage: storage,
//     limits: {
//         fileSize: maxsize
//     }
// }).array("mypic");

app.post("/uploadFile", (req, res) => {
    upload(req, res, (err) => {
        if (err) res.send(err);
        else res.send("Successfully file uploaded");
    });
});

app.listen(3000, () => { console.log("Server started on port 3000.") });