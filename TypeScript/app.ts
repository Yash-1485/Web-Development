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
var a: number=12;

// string
let b: string;
b="hello";

// boolean
let c: boolean=true;

// Multitypes
let ml: (number|string);
ml=12;
ml="Hello World!";

// Array
let arr=[1,2,3,4,5, "string"];
let arr1: number[]=[1,2,3,4,5];
let arr2: (string|number)[];
arr2=[1,2,3,4,5,"Hello"];

// Tuple - Fixed Size, Fixed Type
let tuple: [number]=[1]
let tuple1: [number,string]=[1,"Yash"]

// Enum - Like Object, key=value pairs
enum User{
    FNAME="First Name",
    MNAME="Middle Name",
    LNAME="Last Name",
    AGE=19
}
// Call Enum
// User.FNAME;
// User["FNAME"];

// Giving Type to the function
// Void
function greet(): void{
    console.log("Hello World!");
}

// Other Types
function func(): number{
    console.log("Hello");
    return 12;
}
function func1(): string{
    return "Hello";
}
function func2(): (number|boolean){
    return true;
}

// Any -> TypeScript types strictness won't work for this
let an; //Default type is "any"
an=12;
an="Hola";
an=true;

// Unknown
// We have to check the type before executing any function for that
let un:unknown;
un=12;
un=true;
un="abc";

if(typeof un === "string"){
    un.toUpperCase();
}
if(typeof un === "number"){
    un+=1;
}

// Null
// let nl=null; // type will be any
let nl: null =null; // type will be any
let nl1:(string | null); // type will be any
nl1 =null;
nl1="Hello";

// Undefined
let unf:undefined;
unf=undefined;

// Never
// Used for unreachable statements
function infiniteFunction(): never{
    while(true){}
}
// infiniteFunction(); //Unreachable Function
console.log("Hello");

// Interface and Types

// Defining the shape of the object
interface UserInterface{
    name:string;
    email:string;
    age:number;
    gender?:string; // Optional
}
function funcho(obj:UserInterface){ }

let newUser: UserInterface;
newUser={
    name: "Yash",email:"yo@gmail.com",age:19,gender:"Male"
}

// Type
type value=number|string|null;
let num:value;
num=12;
num="String";
num=null;

// OR - Union Sign -> |
// AND - Intersection Sign -> &

// Classes and Objects
class Person{
    constructor(public name:string,public age:number = 0,public chinch:string){ }
}
let p1=new Person("Yash",19,"abc");
// console.log(p1);

// Make sure that default parameter always falls last in declaration of constructor

class Parent{
    public variable:string;
    // private variable:string;
    // protected variable:string;
    constructor(variable:string){
        this.variable=variable;
    }

    // public variable:string="Yash";
}

class Child extends Parent{
    constructor(something:string){
        super(something);
    }

    changeVariableValue(){
        this.variable="Child";
    }
}

let p=new Parent("Parent");
// p.variable="jbjhv";

// Readonly Property - Can't be changed
class MainClass{
    constructor(public readonly pr:string){}
}

let m=new MainClass("Chincgpokli");

// Getters and Setters
class AnyClass{
    constructor(public _property:string){}
    static randomNumber:number = Math.random()*100;
    get property(): string{
        return this._property;
    }

    set property(value: string){
        this._property=value;
    }
}

let anc=new AnyClass("This is property");
anc.property // Getter
anc.property="Something" //  Setter
// console.log(anc.property);
// console.log(AnyClass.randomNumber);

// Abstract Class and Methods
class Payment{
    constructor(protected accountNumber:number,protected balance:number){}
}

class GPay extends Payment{
    // constructor()
}

let g=new GPay(1,1);
console.log(g);