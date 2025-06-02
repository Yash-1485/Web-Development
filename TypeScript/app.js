"use strict";
// var a=10;
// var b=20;
// const func=()=>{
//     console.log("Hello World!");
// }
// // Tuples
// let arr: [string,number]=['BAC',11];
// // Enum
// enum UserRoles{
//     ADMIN="admin",
//     PASSWORD="password",
//     GUEST="guest"
// }
// console.log(UserRoles["ADMIN"]);
// Basic DataTypes
// number, string, boolean, enum, array, tuple, any, unknown, void, null, undefined
// Primitive DataTypes - number, string, boolean
// References - [], {}, ()
// number
var a = 12;
// string
let b;
b = "hello";
// boolean
let c = true;
// Multitypes
let ml;
ml = 12;
ml = "Hello World!";
// Array
let arr = [1, 2, 3, 4, 5, "string"];
let arr1 = [1, 2, 3, 4, 5];
let arr2;
arr2 = [1, 2, 3, 4, 5, "Hello"];
// Tuple - Fixed Size, Fixed Type
let tuple = [1];
let tuple1 = [1, "Yash"];
// Enum - Like Object, key=value pairs
var User;
(function (User) {
    User["FNAME"] = "First Name";
    User["MNAME"] = "Middle Name";
    User["LNAME"] = "Last Name";
    User[User["AGE"] = 19] = "AGE";
})(User || (User = {}));
// Call Enum
// User.FNAME;
// User["FNAME"];
// Giving Type to the function
// Void
function greet() {
    console.log("Hello World!");
}
// Other Types
function func() {
    console.log("Hello");
    return 12;
}
function func1() {
    return "Hello";
}
function func2() {
    return true;
}
// Any -> TypeScript types strictness won't work for this
let an; //Default type is "any"
an = 12;
an = "Hola";
an = true;
// Unknown
// We have to check the type before executing any function for that
let un;
un = 12;
un = true;
un = "abc";
if (typeof un === "string") {
    un.toUpperCase();
}
if (typeof un === "number") {
    un += 1;
}
// Null
// let nl=null; // type will be any
let nl = null; // type will be any
let nl1; // type will be any
nl1 = null;
nl1 = "Hello";
// Undefined
let unf;
unf = undefined;
// Never
// Used for unreachable statements
function infiniteFunction() {
    while (true) { }
}
// infiniteFunction(); //Unreachable Function
console.log("Hello");
function funcho(obj) { }
let newUser;
newUser = {
    name: "Yash", email: "yo@gmail.com", age: 19, gender: "Male"
};
let num;
num = 12;
num = "String";
num = null;
// OR - Union Sign -> |
// AND - Intersection Sign -> &
// Classes and Objects
class Person {
    constructor(name, age = 0, chinch) {
        this.name = name;
        this.age = age;
        this.chinch = chinch;
    }
}
let p1 = new Person("Yash", 19, "abc");
// console.log(p1);
// Make sure that default parameter always falls last in declaration of constructor
class Parent {
    // private variable:string;
    // protected variable:string;
    constructor(variable) {
        this.variable = variable;
    }
}
class Child extends Parent {
    constructor(something) {
        super(something);
    }
    changeVariableValue() {
        this.variable = "Child";
    }
}
let p = new Parent("Parent");
// p.variable="jbjhv";
// Readonly Property - Can't be changed
class MainClass {
    constructor(pr) {
        this.pr = pr;
    }
}
let m = new MainClass("Chincgpokli");
// Getters and Setters
class AnyClass {
    constructor(_property) {
        this._property = _property;
    }
    get property() {
        return this._property;
    }
    set property(value) {
        this._property = value;
    }
}
AnyClass.randomNumber = Math.random() * 100;
let anc = new AnyClass("This is property");
anc.property; // Getter
anc.property = "Something"; //  Setter
// console.log(anc.property);
// console.log(AnyClass.randomNumber);
// Abstract Class and Methods
class Payment {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}
class GPay extends Payment {
}
let g = new GPay(1, 1);
console.log(g);
// Functions
// Function with callback
function callbackFunction(a, b, cb) {
    console.log(cb(100));
}
callbackFunction("ABC", 2, (num) => {
    return num;
});
function abc(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log(a);
        return;
    }
    if (typeof a === "string" && typeof b === "number") {
        return b;
    }
    else
        throw new Error("Invalid Function");
}
abc("ABC");
abc("ABC", 1);
// Generics
// Generic Function
// Generic Interface
// Generic Classes
// If I don't know the what will be the argument given by the user while calling the function, Generics comes to the picture
function abcd(a) {
    // return "abc" as T
    // return <T>"abc"
    return a;
}
function abcde(obj) {
    console.log(obj);
}
// abcde({name:"Yash",age:19});
class ABC {
    constructor(a) {
        this.a = a;
    }
}
// let objABC=new ABC("Hello");
// console.log(objABC);
// Modules
// All about exporting
// export default - use when only one thing is exporting from a file as object
// export - use when more then one functions or classes or else needed to export
// Type Assertion
function typeAssertion(a) {
    let b;
    // TypeGuard and Type Narrowing
    if (typeof a === "string") {
        b = a.toUpperCase();
    }
    else if (typeof a === "number") {
        b = a.toPrecision();
    }
    return b;
}
console.log(typeAssertion(1));
// Type Casting
let n = Number("12345");
// console.log(n,typeof n);
// TypeGuard and TypeScript Utility
