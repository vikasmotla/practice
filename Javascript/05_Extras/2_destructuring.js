const {name, age, sex} = {name:'vikas', age: 27, sex: 'male'}
console.log(name,age,sex); //vikas 27 male

// default value
(()=>{
    const { name, age = 27, sex } = {name:'vikas', sex: 'male'}
    console.log(name,age,sex); // vikas 27 male
})()

// destructuring can be done when passing arguments specailly in react componentss

const componentA = ({name='john', age=27, sex='male'}) => {
    console.log(name,age,sex); // john 27 male
};

const componentB = () => {
    const person = {name:undefined, age: 27, sex: 'male'}
    componentA(person);
}

componentB();