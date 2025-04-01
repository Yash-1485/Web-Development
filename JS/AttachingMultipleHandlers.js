const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    },3000);
});

promise.then(()=>{console.log('First handler run successfully');return new Promise((res,rej)=>{setTimeout(()=>{res(2)},3000)})}).then((value)=>{console.log(value)});
promise.then(()=>console.log('Second handler run successfully asynchronously'));
promise.then(()=>console.log('Third handler run successfully asynchronously'));