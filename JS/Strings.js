// let a='Yash'
// console.log(a,typeof a)

// console.log(a[4])

// for(ele of a){
//     console.log(ele)
// }

// for(idx in a){
//     console.log(a[idx])
// }

// for(let i=0;i<=5;i++){
//     console.log(a[i])
// }

// let i=0
// while(i<a.length){
//     console.log(a[i])
//     i+=1
// }

// i=0
// do{
//     console.log(a[i])
//     i+=1
// }while(i<a.length)

let str="String"
// console.log(str[0])

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.slice(1,4))//start,end
// console.log(str.substring(1,4))//start,end
// console.log(str.substr(1,4))//start,length

// str="Stringstring "
// console.log(str.search("tri"))
// console.log(str.match("tri"))
// console.log(str.match("tri")["index"])
// console.log(str.indexOf("ing"))
// console.log(str.lastIndexOf("ing"))
// console.log(str.trim())
// console.log(str.concat("This is a original string"))
// console.log(str.concat("This is a original string"," ","Yeah, I was not kidding"))
// console.log(str.replace('string','String'))//only 1st occurance
// console.log(str.startsWith("String"))
// console.log(str.endsWith('String'))
// console.log(str.includes("Str"))

// str="2025 is a very lucky year for all."
// console.log(str.split(" "))
// console.log(str.split(" ")[0])
// console.log(str.charAt(9))
// console.log(str.charCodeAt(9))
// console.log(String.fromCharCode(97))

console.log(str.repeat(3))

console.log(str.indexOf("ing"))
console.log(str.indexOf("ingg"))
console.log(str.lastIndexOf("ing"))
console.log(str.lastIndexOf("ingg"))
console.log(str.search("ing"))
console.log(str.search("ingg"))
console.log(str.match("ing")['index'])
console.log(str.match("ingg"))//returns null