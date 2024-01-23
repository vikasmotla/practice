// block scope, function, global.

//Global
const name = 'vikas'; //available everywhere
const logName = () =>  {
    console.log(name);
    const age = 10; // fn scope available inside this fn.
    if(5===5){
        console.log(age);
        var test = 'test'; // available in this fn, var has fn scope
        let test2 = 'test2' // available only in this block scope, let has block scope
        console.log(test);
        console.log(test2);
    }
    console.log(test);
    // console.log(test2); // reference error, not defined.
};
logName();



/* 
    Lexical scoping = it refers to the scope access between the fn and surrounding code.
    for e.g any global var or parent fn variable is accessible inside child fn.
*/
