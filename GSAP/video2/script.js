// gsap.from("#page1 #box",{
//     scale: 0,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     scrollTrigger:{
//         trigger:"#page1 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 45%"
//     }
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     duration:1,
//     delay:1,
//     rotate:360,
//     // scrollTrigger:"#page2 #box"
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 45%",
//         scrub:2
//     }
// })

// gsap.from("#page3 h1",{
//     opacity:0,
//     y:-20,
//     duration: 1,
//     delay: 1,
//     // scale:0,
//     scrollTrigger:{
//         trigger:"#page3 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 45%",
//         scrub:1,//1 to 5 //smoothness
//     }
// })

gsap.to(".page2 h1",{
    transform:"translate(-190%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})