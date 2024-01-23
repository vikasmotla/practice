const person = {
    name: 'vikas',
    welcomeMessage: function(){
        console.log(`Welcome ${this.name}`);
    }
}

person.welcomeMessage(); // Welsome Vikas
person.name = 'John'
person.welcomeMessage(); // Welcome John


function one(){
    let username = 'vikas'
    console.log(this.username); // undefined, this works with object, but we say that this works in normal fn?
    console.log(this); // long object
}

one();

const two = () => {
    let username = 'vikas'
    console.log(this.username); // undefined
    console.log(this); // {}
}
two();

console.log('thisssss');
(() => {
    const obj = {
        username: 'vikas',
        print: function() {
            console.log(this); // it has reference
            console.log(`name: ${this.username}`);
        },
        printArrow: () => {
            // console.log(`name: ${username}`); // error
            console.log(this, `name: ${obj.username}`); // {} , name: vikas
        }
    }
    obj.print(); // big object, name: vikas
    obj.printArrow(); // {} , name: vikas
    obj.username = 'John';
    console.log('after name changeeee---');
    obj.print(); // big object, name: John
    obj.printArrow(); // {} , name: John
})();