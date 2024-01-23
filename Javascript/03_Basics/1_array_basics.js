let emptyArray = [];
let array = ['1',1,5,false];

// Array is collection of data, in JS data can be of anytype

console.log(array[1]); // 1
console.log(array['2']); // 5, this is valid
console.log(array['02']); // undefined.

//push
array.push('another var');
console.log(array); // [ '1', 1, 5, false, 'another var' ]

// also can be added as
array[5] = 34; // this can add new or replace old
console.log(array);

// what if we put like array[10]?, when length is 6
console.log(array.length);
array[10] = '10th';
console.log(array, array.length); // [ '1', 1, 5, false, 'another var', 34, <4 empty items>, '10th' ] and 11
console.log(array[7]); // undefined


//can we delete last elements using length?
array.length = 6; //length changed to 6
console.log(array); //[ '1', 1, 5, false, 'another var', 34 ]


//deep and shallow copy in arrays. ... operator in js