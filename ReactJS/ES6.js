const array=['apple','banana','red','pineapple'];

// console.log(array.map((item)=>{return item.length}));
console.log(array.map((item)=>{return item.length<6}));

// Array Destructing + Rest Operator
// const [a,b,c,d]=array;
const [a,b,...c]=array;
console.log(a,b,c);
// Object Destructing
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
};

// const {brand: x,model: y,type: z,year: p,color: q}=vehicleOne;
const {brand: x,model: y,...z}=vehicleOne;
console.log(x,y,z);

// Spread Operator
let a1=[1,2,3,4,5];
let a2=[...a1,6,7,8,9,10];
console.log(a1,a2);

// Turnary Operator
let login=true;

const loginSuccess = () => {
    console.log('✅ Login Success!!');
}

const loginFailed = () => {
    console.log('⚠️ Login Failed!!');
}

const run=()=>{login?loginSuccess():loginFailed();};
run();