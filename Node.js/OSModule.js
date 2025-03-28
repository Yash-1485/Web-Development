// console.log(exports,require,module,__filename,__dirname);

const os=require("os");

console.log(os.freemem()/(1024**3),"GB");