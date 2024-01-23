// setInterval(func, delay)
const printThis = () => {
    console.log('every 1 sec');
};
const setInt = setInterval(printThis, 1000);
setTimeout(()=>clearInterval(setInt),5100);

//setTimeout(functionRef, delay)
// clearTimeout()
