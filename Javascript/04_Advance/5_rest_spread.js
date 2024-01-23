// Rest 
// as name suggests it takes rest of pramaeters in js fn
//it stores as an array
const manyParameters = (a, b, ...rest) => {
    console.log(a, b); // 10, 5
    console.log(rest); // [50, 6, 7, 7]
}

manyParameters(10, 5, 50, 6,7 ,7);


//Spread"
// it makes a shallow copy of array or object.

let array1 = [1,2,3]
let array2 = [...array1, 4,5]
console.log(array2); // [ 1, 2, 3, 4, 5 ]

//same with object./
let obj1 = {name: 'vikas', age: 26}
let obj2 = {...obj1, age: 27} // it copies name age then replace age with new element
console.log(obj2);//{ name: 'vikas', age: 27 }