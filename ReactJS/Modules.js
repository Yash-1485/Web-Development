// import {colors} from './Colors.js';//When export statement is used
// import colors from './Colors.js';//When export default statement is used
// import {id,name,colors} from './Colors.js';//When multiple items exported statement is used
// import props from './Colors.js';//When multiple items exported statement is used

// Using Both
// import colors, {id,name} from './Colors.js';
import colors from './Colors.js';
import {id,name} from './Colors.js';

try{
    console.log(id);
    console.log(name);
    console.log(colors);
}catch(e){
    console.log(e);
}