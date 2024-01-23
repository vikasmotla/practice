//Promises - it's a way of writing async fn. we write the logic such that it after the code it returns 
// a resolve or reject and controller will go back to the place where promise is returned.

//consider prev example in call back hell

let result = 0;

const addThis = (value) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            result+=value;
            resolve();
        }, 1000)
    });
};

const substractThis = (value) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            result-=value;
            resolve();
        }, 1000)
    });
};


const devideThis = (value) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            result/=value;
            resolve();
        }, 1000)
    });
};

addThis(50)
    .then(substractThis(10)
    .then(devideThis(5)
    .then(()=>{
    console.log(`total is ${result}`);
})));

// much more readable. easy to maintain.

//promise chaining.
console.log('Promise Chaining-----');
const getUsername = ()=>{
    return new Promise((resolve)=>{
        resolve({username: 'vikas'})
    });
}

getUsername()
    .then((user)=>{
        return user.username; // this will go to next then statement
    })
    .then(username=>console.log(username))
    .catch((error)=>console.log('this will come when rejected'))
    .finally(()=>console.log('this will run always finally'));




