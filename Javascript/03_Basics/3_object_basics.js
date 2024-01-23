//Objects are unordered collection of data present in form of key-value pairs

const person = {
    name: 'vikas',
    age: 25
};

//methods/fns

const person2 = {
    myMethod: () => {

    },
    myMethod2: function(){

    },
    myMethod3(){

    }
}

// Accessing . dot or [] - Square brackets can be used to access properties dynamically.

console.log('Object.keys--');
console.log(Object.keys(person)); // [ 'name', 'age' ]

console.log('Object.values--');
console.log(Object.values(person)); // [ 'vikas', 25 ]

console.log('Object.entries--'); // nested array of key/values pairs of object.
console.log(Object.entries(person)); // [ [ 'name', 'vikas' ], [ 'age', 25 ] ]


(()=>{
    const person = {
        name: 'vikas',
        age: 25
    }
    const admin = Object.freeze(person);
    admin.name = 'test';
    person.name = 'Vikas Motla'
    console.log(admin); // { name: 'vikas', age: 25 }
    console.log(person);// { name: 'vikas', age: 25 }
})();


// find a value whose key is known.
console.log('value from key');
(()=>{
    const dynamicKey = 'name'
    const person = {
        name: 'vikas',
        age: 25
    }

    //value from key.

    console.log(person.name); //vikas
    console.log(person[dynamicKey]); // vikas
})()

console.log('for loop on objects---');
//for (key in object)
(()=>{
    const person = {
        name: 'vikas',
        age: 25
    }
    for(const key in person){
        console.log(`key is ${key} and value is ${person[key]}`);
    }
})();

console.log('deep copy of objects');
(()=>{
    const person = {
        name: 'vikas',
        age: 25
    }
    // const newPerson = person; // shallow copy/
    const newPerson = {...person};
    newPerson.name = 'Vikas Motla'
    console.log(newPerson, person); // { name: 'Vikas Motla', age: 25 } { name: 'vikas', age: 25 }

    //but problem with above aproach is it only allow 1 level of cloning.

    person.address = {
        street: 'test',
        gate: 10
    };
    const newPerson2 = {...person};
    newPerson2.address.street = 'new test'
    console.log(person.address); // { street: 'new test', gate: 10 }
    // you can still do newPerson2 = {...person, address:{...person.address}}. but problem comes when it has 3-4 level of depth.


    // other way: parse stringify
    const newPerson3 = JSON.parse(JSON.stringify(person));
    newPerson3.name = 'new Name'
    newPerson3.address.street = 'Street is new';
    console.log(newPerson3.name); // new Name
    console.log(person.name, person.address.street); // vikas new test

    //problem with above approach is when there is date object or function it doesnt convert back properly.

    //there is no other way to do deep copy except object.assign({}, oldObj) and lodash

    // lodash clone Deep can be used
})();



//deep copy
console.log('Deeep=----');
(()=>{
    const person = {
        name: 'vikas',
        age: 25,
        address: {
            street: 'test',
            city: 'bangalore'
        },
        printThis: () => {
            console.log(`name is : ${this.name}`);
        },
        date: new Date()
    }

    const copy = (person) => {
        let deepCopy = {};
        for(key in person){
            if(typeof person[key]==='object' && person[key]!= null) 
                deepCopy[key] =  copy(person[key])
            else
                deepCopy[key] = person[key]
        }
        return deepCopy;
    }
    const deepCopyPerson = copy(person);
    console.log(deepCopyPerson);

    // it has issues with date and fn
    deepCopyPerson.printThis(); // name is undefined
    console.log(deepCopyPerson.name); // vikas
})();


//hasOwnProperty.
console.log('hasOwnProperty--- ternary operator');
(()=>{
    const person = {
        name: 'vikas',
        age: 25,
        address: {
            street: 'test',
            city: 'bangalore'
        }
    }
    console.log(person.hasOwnProperty('name')); // true
    console.log(person.hasOwnProperty('test')); // false

    let city = person?.address?.city
    console.log(city); // bangalore

    city = person?.address?.cityName
    console.log(city); // undefined, but it will not give reference error.

    // other ways: const city = person ? person.address ? person.address.city : 'default' : 'default2'
    const city2 = person ? person.address ? person.address.city : 'default' : 'default2'
    const doorNo = person ? person.address ? person.address.doorNo : 'default' : 'default2'
    console.log(city2, doorNo); // bangalore, undefined
    //but best way is above onr like person?.address?.cityName

    // also this can be done as if(person && person.address && person.address.city)
})();