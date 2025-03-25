const fs = require('fs');

// Asynchronous Functions
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
// try{    
//     fs.truncate('Node.js/CheckTruncateingFile.txt',function(err){
//         if(err) console.error(err);
//         else console.log('File Truncated Successfully');
//     });
// }catch(e){
//     console.log(e);
// }

// Synchronous Functions
// Making Directory
if (! fs.existsSync('Node.js/TxtFiles')){
    fs.mkdirSync('Node.js/TxtFiles');
    console.log('Folder Created Successfully');
}

const path='Node.js/TxtFiles/First.txt';

// fs.writeFileSync(path,data='Hello World!');
// fs.appendFileSync(path,data=' Hello Universe!');
// const res=fs.readFileSync(path,{encoding:'utf-8'});
// const res=fs.readFileSync(path,'utf-8');
// console.log(res);

try{
    // const res=fs.readFileSync(path,'utf-8');
    // console.log(res);
    // fs.renameSync(path,'Node.js/TxtFiles/Test.txt');
    // console.log('File renamed successfully');
    // fs.rmSync('Node.js/TxtFiles/Test.txt');
    // console.log('File Removed Successfully');

    // fs.copyFileSync(path,'Node.js/TxtFiles/Test-copy.txt');
    // console.log('File Copied Successfully');

    // fs.truncateSync('Node.js/TxtFiles/Test-copy.txt',10);
    // fs.truncateSync('Node.js/TxtFiles/Test-copy.txt');
    // console.log('File truncated successfully');
}catch(e){
    console.error(e);
}