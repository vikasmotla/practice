/*
    concat(), flat(), indexOf(), lastIndexOf(),
    every(), filter(), forEach(), map(), reduce(), reverse(), 
    slice(), some(), sort(), and splice()
*/

console.log('Concat----');
(()=>{
    //concat
    let array1 = [1,2,3];
    let array2 = [4,5,6];

    // concat it is a copied method and doesnot alter source array
    const array3 = array1.concat(array2); 
    console.log(array1, array2, array3);// 1,2,3   4,5,6  1,2,3,4,5,6
})();

console.log('Flat----');
(()=>{
    //flat(depth) : default depth 1, creates new array with all sub array elements concatinated as single array.
    let array1 = [1,2,[4,5]];
    console.log(array1.flat()); // [ 1, 2, 4, 5 ]

    let array2 = [1,2,[4,5,[6,7]]];
    console.log(array2.flat()); [ 1, 2, 4, 5, [ 6, 7 ] ]

    console.log(array2.flat(2)); // upto level 2, [ 1, 2, 4, 5, 6, 7 ]
})();

console.log('Index----');
(()=>{
    //indexOf : returns first index present at provided value, -1 when not present
    //indexOf(searchElement)
    //indexOf(searchElement, fromIndex)

    let array1 = [1,2,4,5,4,5,4];
    console.log(array1.indexOf(4)); // 2
    console.log(array1.indexOf(10)); // -1
    console.log(array1.indexOf(4,4)); // 4
    console.log(array1.indexOf(4,10)); // -1
    console.log(array1.indexOf(NaN),'NaN'); // -1


    //lastIndexOf(searchElement)
    //lastIndexOf(searchElement, fromIndex)
    console.log(array1.lastIndexOf(4)); //6, return last index
    console.log(array1.lastIndexOf(12)); //-1

    console.log(array1.lastIndexOf(4,3)); //2, starts from 3rd index and goes towards 0th index to find.


    const array = [NaN];
    console.log(array.indexOf(NaN)); // -1
    console.log(array.lastIndexOf(NaN)); // -1

})();

console.log('Every----');
(()=>{
    //every : whether all elements in the array pass the test provided by fn, returns boolean
    let array1 = [1,2,4,5];
    console.log(array1.every((current)=>current>0)); // true
    console.log(array1.every((current)=>current>3)); // false
})();


console.log('Filter----');
(()=>{
    //Filter : creates shallow copy of portion of given array based on condition provided in fn
    let array1 = [1,2,4,5];
    console.log(array1.filter((current)=>current>0)); // [ 1, 2, 4, 5 ]
    console.log(array1.filter((current)=>current>3)); // [ 4, 5 ] filters out element which returns false.
})();

console.log('For Each----');
(()=>{
    //Foreach : it is just itereation for all elements.
    const array1 = ['a', 'b', 'c'];
    array1.forEach((element) => console.log(element));

    // Expected output: "a"
    // Expected output: "b"
    // Expected output: "c"
})();

console.log('Map----');
(()=>{
    //Map : creates new array based on return of every elements. used to manipulate each elements
    const array1 = [1,2,4];
    const mapArray = array1.map((element) => element+2);
    console.log(mapArray);// [3,4,6]

    //parseInt, Number
    const parsedArr = ['1','2','3','abc'].map((str)=>parseInt(str));
    console.log(parsedArr);//[ 1, 2, 3, NaN ]

    const numberArray = ['1','2',0,false].map((str)=>Number(str)); 
    console.log(numberArray);// [ 1, 2, 0, 0 ]

    // dont use map if you dont want tp change anything, and doesnt want return instead use forEach

    const products = [
        { name: "sports car" },
        { name: "laptop" },
        { name: "phone" },
    ];

    const productsWithPrice = products.map((product) => {
        return { ...product, price: 100 };
    });
    console.log(productsWithPrice); // name and price will be added

    // in map, callFn will not be called if element is empty - [1,,3]
})();

console.log('Find -- Returns first value that satisfy the condition.');


console.log('Reduce----');
(()=>{
    //Reduce : returns a single value using a reducer callback fn, it accepts accumulator and current value as args
    const array1 = [1,2,3,4];
    const sum = array1.reduce((accu, current) => accu + current, 0);
    // every iteration results stored in accu, starting with 0 as init value for accu
    console.log(sum);
})();

console.log('Reverse----');
(()=>{
    //Reverse : reverse array but also changes original array.
    let array1 = [1,2,4,5];
    console.log(array1.reverse()); // [ 5, 4, 2, 1 ]

    // in case if you dont want mutation
    const numbers = [1,2,3];
    const reversed = [...numbers].reverse();
    console.log(reversed);// [ 3, 2, 1 ]
    console.log(numbers);// [ 1, 2, 3 ]
})();


console.log('Sort----');
(()=>{
    //sort : sort based on condition, if no condition it will sort with first letter
    let array1 = [1,22,400,11115];
    console.log(array1.sort()); //[ 1, 11115, 22, 400 ]
    console.log(['march', 'apr', 'december'].sort()); // [ 'apr', 'december', 'march' ]

    // but if you want to sort numbers use callback fn condition
    console.log(array1.sort((a,b)=>a-b)); //[ 1, 22, 400, 11115 ]
})();

console.log('Slice----');
(()=>{
    //Slice: returns shallow copy of portiion of an array into new arra selected from start and end index
    //slice(start, end) 
    // slice(start) -- till end
    // slice(-start, -end) it denotes index from end but it starts from -1 not 0
    // start is inclusive, end is not.


    let array1 = [1,22,40,15,4,6,8];
    console.log(array1.slice(2));
    console.log(array1); // there is no change in original array.

    console.log(array1.slice(2,4)); // 40, 15

    console.log(array1.slice(-2)); // 6,8
    console.log(array1.slice(2,-1)); // 40, 15, 4, 6


    const newArr = array1.slice(2,4);
    //if you change somwthing in newArr. original will not change
    console.log(newArr, 'newarr'); // 40, 15
    newArr[0] = 555;
    newArr[3] = 666;
    console.log(array1); // no change
})();


console.log('Splice----');
(()=>{
    //Splice: changes content of an existing array. it returns removed items. and existing one changes with remaining
    //splice(start, deleteCount) 
    //splice(start, deleteCount, item1....)

    let array1 = [1,22,40,15,4,6,8];
    const newArr = array1.splice(1,4); // starts from index 1 and delete next 4 elements
    console.log(array1); // 1,6,8
    console.log(newArr, 'newArr'); // [ 22, 40, 15, 4 ] -- removed items come here
    // array1 is mutated
    const newArr2 = array1.splice(1,1,'repaced 6 with this');// starts from 1 index, delete 1 element and replace with followed item
    console.log(array1); // [ 1, 'replaced 6 with this', 8 ]
    console.log(newArr2, 'newArr2'); // [6]


    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const removed = myFish.splice(2, 0, "drum");
    console.log(removed); // []
    console.log(myFish); // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
})();


console.log('includes -- returns boolean value');

// push(), pop(), shift(), unshift(), include()




