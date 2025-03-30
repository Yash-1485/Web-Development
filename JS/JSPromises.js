let a=102;

let promise=new Promise((resolve,reject)=>{
    if(a%2==0){
        resolve(true);
    }else{
        reject(new Error("Not an even number."));
    }
});

// promise.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
// });

// promise.then((value)=>{console.log(value);}).catch((err)=>{console.log(err.message)});
promise.then((value)=>{console.log(value);},(err)=>{console.log(err.message)});