function greet(){
    console.log("Hello World!")//function definition
}

//function calling/invoking
// greet()

const sum=function(a,b,c=5){
    console.log(a,b,c)
    return a+b+c
}

// console.log(sum(1))
// console.log(sum(1,2))
// console.log(sum(1,2,3))

//Arrow Function
let myFunction = (msg) => {
    console.log("The given message is:",msg)
}

myFunction("This whole universe is beautiful!!!")