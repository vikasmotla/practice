// it is not necessory that you handle promise with .then .catch. you can do it with async await.

// syntax is use async before fn and await before promise call

const getUsername = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
             resolve({username: 'vikas'});
        }, 3000)
        console.log('inside promise');
    });
};

const executeThis = async () => {
    const result = await getUsername();
    console.log(result);
};

executeThis();