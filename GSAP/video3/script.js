let path="M 10 100 Q 490 100 1000 100"

let final_path="M 10 100 Q 490 100 1000 100"

let string=document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    // console.log("entered")
    path=`M 10 100 Q ${dets.x} ${dets.y} 1000 100`
    // console.log(path)
    gsap.to("#string path",{
        attr:{
            d:path
        },
        duration:0.5,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(dets){
    // console.log("leaved")

    gsap.to("#string path",{
        attr:{
            d:final_path
        },
        duration:0.5,
        ease:"elastic(1.2,0.2)"
    })
})