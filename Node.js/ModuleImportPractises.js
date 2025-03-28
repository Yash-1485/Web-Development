// Using Common JS
// Only one function is exported so any name can be taken while importing
// const sampleFunction1 = require("./ModuleExportPractises");
// sampleFunction1();

// const obj=require("./ModuleExportPractises");
// obj.sampleFunction()
// const emp=new obj.Employee(1,"ABC","CEO",100000);
// console.log(emp);

// const {sampleFunction:sampleFunction1,Employee:Emp} = require("./ModuleExportPractises");
// sampleFunction1();
// const emp=new Emp(1,"ABC","CEO",100000);
// console.log(emp);

// const {sampleFunction:sampleFunction1,Employee:Emp,hello="Hello World!"} = require("./ModuleExportPractises");
// console.log(hello);

// Using EcmaScript Model
// import {sampleFunction} from "./ModuleExportPractises.js";
// sampleFunction();

// import sampleFunction from "./ModuleExportPractises.js";
// sampleFunction();

// import obj from './ModuleExportPractises.js';
// obj.sampleFunction();
// const emp = new obj.Employee(1, "ABC", "CEO", 100000);
// console.log(emp);

// import {sampleFunction,Employee} from './ModuleExportPractises.js';
// sampleFunction();
// const emp1=new Employee(1,"ABC","CEO",100000);
// console.log(emp1);

// import obj from './ModuleExportPractises.js';
// obj.sampleFunction();
// const emp1=new obj.Employee(1,"ABC","CEO",100000);
// console.log(emp1);

// When default
// import * as obj from './ModuleExportPractises.js';
// obj.default.sampleFunction()
// const emp1=new obj.default.Employee(1,"ABC","CEO",100000);
// console.log(emp1);

// When not default
import * as obj from './ModuleExportPractises.js';
obj.sampleFunction()
const emp1=new obj.Employee(1,"ABC","CEO",100000);
console.log(emp1);

// if import is not working properly than in package.json file-> "type":"module", <- paste it above "autor"