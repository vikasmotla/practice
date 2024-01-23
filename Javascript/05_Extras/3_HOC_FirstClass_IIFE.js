// first class function are those as treated as other variables.
// can be passed as arguments in another fn

//example
console.log('First Class Fn');
const Arithmatics = {
    add: (a,b) => {
        return a+b;
    }
};

console.log(Arithmatics.add(4, 6));


//HOF:  A fn that receives another fn as an arguments or that returns new fn is called HOF
// HOF are possible because of First class fn.


//IIFE
(()=>{console.log('iife')})(); // semicolon is important in IIFE else next iife can not be considered.
(function(){
    console.log('iife')
})();