/* gsap.to("#box1",{
    x:1200,
    duration:2,
    delay:1,
    backgroundColor:"coral",
    borderRadius:"50%",
    rotate:360
})
gsap.from("#box2",{
    x:1200,
    duration:2,
    delay:1,
    backgroundColor:"navy",
    borderRadius:"50%",
    rotate:360
}) */

// gsap.to("h1",{
//     x:700,
//     duration:3,
//     delay:1,
//     color:"crimson"
// })

// gsap.from("h1",{
//     opacity:0,
//     y:50,
//     duration:2,
//     delay:1,
//     stagger:0.5    
// })

// stagger -> 1 -> duration time, -1 -> last will animated first

// gsap.from("h1",{
//     opacity:0,
//     y:30,
//     duration:1,
//     delay:1,
//     stagger:-1    
// })

// yoyo: true/false -> sets alternate
// repeat: no.of total repeats (+1), -1 for infinite
gsap.to("#box",{
    x:1200,
    duration:0.5,
    delay:1,
    rotate:360,
    repeat:3,
    yoyo:true
})