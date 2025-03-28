/**
 * Sample function only for cheking for Importing and exporting facilities
 * @returns {undefined}
 */
function sampleFunction(){
    console.log("This is a sample function which is imported now!!!");
}

class Employee{
    constructor(eid,name,desg,salary){
        this.eid=eid;
        this.name=name;
        this.desg=desg;
        this.salary=salary;
    }

    display(){
        return `
        Employee Details: \n
        Id: ${this.eid},\n
        Name: ${this.name},\n
        Designation: ${this.desg},\n
        Salary: ${this.salary},\n
        `;
    }
}

// Usimg Common JS
// module.exports=sampleFunction;

// module.exports={sampleFunction,Employee};

// Using EcmaScript Model
// export {sampleFunction};
// export default {sampleFunction,Employee};
export {sampleFunction, Employee};