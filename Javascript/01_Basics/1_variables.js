const accountId = 1223;
let accountEmail = "vikas.motla@gmail.com"
var accountPwd = "1212";
accountCity = 'Bangalore'; // still able to print, but if we use "use strict", it will give reference error: not defined
let accountName; // undefined.

// accountId = 333; // TypeError: Assignment to constant variable.
console.log(accountId);

accountEmail = 'vmotla@gmail.com';
accountPwd = 'test';
console.table([accountId, accountEmail, accountPwd, accountCity, accountName]);



console.log(accountReset); // in case of let and const - error, but incase of var it will be undefined.
// const accountReset = false; ReferenceError: Cannot access 'accountReset' before initialization
// let accountReset = false; same error
var accountReset = false;


/*
    prefer not to use var, because of issue in block scope and fnal scope.
    var uses fnal scope.
    let uses block scope.
*/

function example() {
    if (true) {
      var x = 10;
      let y = 20;
      console.log(x); // Output: 10
    }
    console.log(x); // Output: 10
    x = 30;
    console.log(x); // Output: 30
    console.log(y); // reference error: y is not defined.
  }
  
  example();

  // x fn scope so it is accessible both inside and outside if block. 
  // if you change outside if block, value will change inside aswell
  // that is why we use let these days.


//   "use strict" // treat all JS code as newer version.
