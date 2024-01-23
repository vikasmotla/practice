/*
    JS mechanism where variables and fns declarations 
    are moved to top of their scope before code execution.
*/

console.log(age); // undefined, because only declarations move to top, value assign at runtime only.
var age = 20;

// console.log(name); // no hoisting for modern js for let const.
// it is called as temporal dead zone for name variable, because it is not accessible.
let name = 'vikas';


// hoisting in fns.
test(); // execute this will print

function test(){
    console.log('execute this');
}