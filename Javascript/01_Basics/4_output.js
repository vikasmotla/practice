function sum(){
    console.log(c); // undefined
    // console.log(a); // a is not defined
    if(true){
        let a = 8;
        const b=2;
        var c=a+b;
    }
    // console.log(a); //a is not defined
    // console.log(b); // b is not defined
    console.log(c); // 10
}
// console.log(a); //a is not defined
// console.log(b);  //b is not defined
// console.log(c); //c is not defined
sum();
// console.log(a); //a is not defined
// console.log(b); //b is not defined
// console.log(c); //c is not defined


const checkArr = () => {
    let arr=[1,2,3,4,5]
    console.log(arr[2], arr.length); // 3,5 
    arr.length=0; // this means arr = [];
    console.log(arr, arr[2], arr.length); // [], undefined, 0
    arr = undefined;
    // console.log(arr[2]); //cant read prop of undefined
    // console.log(arr.length); //cant read prop of undefined
}

checkArr();
