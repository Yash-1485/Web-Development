function Employee(id,name,desg,age,salary){
    this.id=id,
    this.name=name,
    this.desg=desg,
    this.age=age,
    this.salary=salary

    this.display=()=>{console.log(this.id,this.name,this.desg,this.age,this.salary);}
};

module.exports={emp:Employee};