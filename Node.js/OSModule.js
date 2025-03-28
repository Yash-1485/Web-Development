// console.log(exports,require,module,__filename,__dirname);

const os=require("os");


// freemem()
console.log(os.freemem()/(1024**3),"GB");
// totalmem
const totalMemory=os.totalmem();
console.log(totalMemory/(1024**3),"GB");

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.machine());
console.log(os.networkInterfaces());
console.log(os.type());
console.log(os.uptime()/24/3600);
console.log(os.userInfo());