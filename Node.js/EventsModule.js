const EventEmitter = require('events');

class MyEvents extends EventEmitter{}

const event=new MyEvents();

// // Custom Event
// event.on("Tankfull",()=>{
//     console.log("Tank has been filled");

//     setTimeout(()=>{
//         console.log("Gental Reminder! Tank has been filled up.");
//     },2000);
// });

// event.emit("Tankfull");//Firing the custom created event
let m=0; 
let n=0; 
event.once('sleep',()=>{
    m++;
    console.log("Remove the mobile from charging");
    setTimeout(()=>{
        console.log("Remove the mobile from charging");
    },1000);
});

event.on('wakeup',()=>{
    n++;
    console.log("Put the mobile on charging");
    setTimeout(()=>{
        console.log("Put the mobile on charging");
    },1000);
});

// No. of times running it, it will be run once only.
event.emit("sleep");
console.log(m);
event.emit("sleep");
console.log(m);

// No. of times running it, it will be run no. of times.
event.emit("wakeup");
console.log(n);
event.emit("wakeup");
console.log(n);