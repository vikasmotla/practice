let str = "Hello World";

console.log(str.length); // 11

console.log(str.indexOf('o'));// 4
console.log(str.indexOf('L')); // -1
console.log(str.indexOf('A')); // -1
console.log(str.lastIndexOf('o'));// 7

let { start, end } = {start: 2 , end: 6}
console.log(str.slice(start, end)); // llo, end is not inclusive
console.log(str.substring(start, end)); // llo

let {target, replacement} = {target:'World', replacement: 'Javascript'}
console.log(str.replace(target, replacement)); // Hello Javascript

let seperator = '';
console.log(str.split(seperator)); //converts to array. ['H','e'....]

console.log(str.trim()); // removes extra space, from start and end.

console.log(str.toUpperCase()); // upper case HELLO WORLD
console.log(str.toLowerCase()); //hello world


