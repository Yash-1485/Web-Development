const emp=require('./ModuleExporting');
// const {emp:Employee,names='Yash'}=emp;
const Employee=emp.emp;
const employee=new Employee(1,'Yash','CEO',20,100000000);
employee.display();