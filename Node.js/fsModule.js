const fs = require('fs');

const Bufferdata=fs.readFile('./Demo.txt',function(err,data){
    if(err) console.error(err);
    else console.log(data);
});

const data=fs.readFile('./Demo.txt',{encoding:"utf-8"},function(err,data){
    if(err) console.error(err);
    else console.log(data);
});