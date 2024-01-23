//callbacks are important part os async JS

const functionOne = (callback)=>{
    console.log('fn 1 executed');
    callback();
};  

const function2 = ()=>{
    console.log('fn 2 executed');
};
functionOne(function2);


// usage
const fetchApi = (callback) => {
    console.log('fetch call data etc');
    setTimeout(()=>{
        callback();
    },4000)
}

fetchApi(()=>{
    console.log('data received after 4 sec');
});


//Callback Hell - it is nested callback one below the other. everycallback waits for another callback.

// example
let result = 0;
// add 50, sub 10, devide by 5

const addThis = (value, callback) => {
    setTimeout(()=>{
        result+=value;
        callback();
    },3000)
};

const substractThis = (value, callback) => {
    setTimeout(()=>{
        result-=value;
        callback();
    },3000)
};

const devideThis = (value, callback) => {
    setTimeout(()=>{
        result/=value;
        callback();
    },3000)
};

addThis(50, ()=>{
    substractThis(10, ()=>{
        devideThis(5, ()=>{
            console.log(`total is ${result}`);
        });
    });
});

//there is nothing wrong but it is not readable and there are better ways to do it. hard to maintain
// we can use promise and async await.


