/**
 * Loadscript Function
 * @param {String} src - A link of script.js file in form of string 
 * @returns {Promise} - Returns a promise
 */
const loadscript = (src) => {
    let promise = new Promise((resolve,reject)=>{
        const script=document.createElement('script');
        script.type='text/javascript';
        script.src=src;
        setTimeout(()=>{
            document.body.appendChild(script);
        },2000);
        
        // script.onload(()=>{resolve(true)});
        // script.onerror(()=>{reject(new Error('Script load failed!!'))});

        script.addEventListener("load",()=>{resolve(true)});
        script.addEventListener("error",()=>{reject(new Error('Script load failed!!'))});
    });
    return promise;
}

// loadscript('./Feature.js').then(value=>{console.log(value)},(err)=>{console.log(err.message)});
let promise=loadscript('./Feature.js');
// promise.then(value=>{console.log(value,'Script loaded successfully');},(err)=>{console.log(err.message);});
promise.
then(value=>{console.log(value,'Script loaded successfully');return loadscript('./Feature2.js');}).
then((value)=>{
    console.log(value,'Another Script loaded successfully');
}).catch((err)=>{console.log(err.message);});