const path=require("path");
const os=require("os");

let p="D:/Web-Development/Node.js/Demo.txt"
console.log(path.basename(p));
console.log(path.dirname(p));
console.log(path.extname(p));
console.log(path.parse(p));
console.log(path.format(path.parse(p)));
console.log(path.join('D:','Hello',"Jello","Kello","Home.txt"));