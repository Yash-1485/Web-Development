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
// gsap.to("#box",{
//     x:1200,
//     duration:0.5,
//     delay:1,
//     rotate:360,
//     repeat:3,
//     yoyo:true
// })

// timeline() - to make objects appear one by one
// let tl=gsap.timeline()

// tl.to("#box1",{
//     x:1500,
//     duration:1,
//     delay:0.5,
//     rotate:360
// })
// tl.to("#box2",{
//     x:1500,
//     duration:1,
//     scale:0.5,
//     rotate:360
// })
// tl.to("#box3",{
//     x:1500,
//     duration:1,
//     rotate:360,
//     borderRadius:"50%"
// })

// Try
let tl=gsap.timeline()
tl.from(".nav>h2",{
    y:-30,
    duration:1,
    delay:0.5,
    opacity:0
})

tl.from(".nav-part>.nav-item",{
    y:-30,
    duration:1,
    opacity:0,
    stagger:0.3
})

tl.from(".main>h1",{
    y:0,
    opacity:0,
    duration:0.5,
    scale:0.2
})