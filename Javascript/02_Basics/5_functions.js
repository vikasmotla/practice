function normalFn(parameter){
    let returnValue = `return: argument passed is parameter when recieved, param: ${parameter}`;
    return returnValue;
}

let returnedValue = normalFn('argument');
console.log(returnedValue);

//Arrow
const arrorFn = () => {
    return `return from arrowFn`
};

let returnedArrow = arrorFn();
console.log(returnedArrow);

const oneLineArrFn2 = () => `This is one line arr fn, no need to write return keyword`; // implicit return
console.log(oneLineArrFn2());


//default value

const defaultValueFn = (a, b = 0) => {
    return `It has default value of b as 0, a is ${a}, b is ${b}`
}
console.log(defaultValueFn(3));