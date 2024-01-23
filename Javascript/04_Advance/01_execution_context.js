const exec_context = () => {
    setTimeout(()=>{
        console.log('this will run 2nd');//B
    },0)
    console.log('This will run first');//A
};

exec_context();


// log A runs first because, set timeout is given to wb api to run for 0 seconds then it goes to callback queue
// event loop constantly checks wether call stack is empty or not.
// meanwhile call stack will run log A, once call stack is empty, event loop takes log B from callback queue and gives to
// call stack to run. then log B will run.



const execContextBlock = () => {
    let sum = 0;
    for(let i=1; i<10000000000; i++){
        sum+=i;
    }
    setTimeout(()=>{
        console.log('will run stleast after 2 sec, EC will be blocked.');
    }, 5000)
};

execContextBlock();