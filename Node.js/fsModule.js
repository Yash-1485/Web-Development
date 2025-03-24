const fs = require('fs');

// const Bufferdata=fs.readFile('./Demo.txt',function(err,data){
//     if(err) console.error(err);
//     else console.log(data);
// });

// const data=fs.readFile('./Demo.txt',{encoding:"utf-8"},function(err,data){
//     if(err) console.error(err);
//     else console.log(data);
// });

// Read Operation
// const data=fs.readFile('Node.js/Demo.txt',{encoding:'utf8'},function(err,data){
//     if(err){
//         console.error(err)
//     }else{
//         console.log(data)
//     }
// });

// Write Operation
// fs.writeFile('Node.js/TestFileWrite.txt',data='Hello World!',function(err){
//     if(err){console.log(err);}
//     else{console.log('File write completed')}
// });

// Append Operation
// fs.appendFile('Node.js/TestFileWrite.txt',data=' Hello Universe!',function(err){
//     if(err){console.log(err);}
//     else{console.log('File Data apended successfully');}
// });

// Rename File
// fs.rename('Node.js/TestFileWrite.txt','Node.js/RenameTestFileWrite.txt',function(err){
//     if(err) console.log(err);
//     else console.log('File renamed successfully');
// });

// Copy File
// fs.copyFile('Node.js/RenameTestFileWrite.txt','Node.js/TestFileWrite_Copy.txt',function(err){
//     if(err) console.error(err);
//     else console.log('File copying proceess done')
// });

// File Existance
// console.log(fs.existsSync('Node.js/TestFileWrite_Copy.txt',function(eer){
//     if(err) console.error(err);
// }));

// File unlink
// fs.unlink('Node.js/TestFileWrite_Copy.txt',function(err){
//     if(err) console.error(err);
//     else console.log('File Unlinked Successfully');
// });

// File Data Truncating
try{    
    fs.truncate('Node.js/CheckTruncateingFile.txt',function(err){
        if(err) console.error(err);
        else console.log('File Truncated Successfully');
    });
}catch(e){
    console.log(e);
}