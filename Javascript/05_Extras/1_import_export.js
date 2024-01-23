// to export one thing from file

const person = {
    name: 'vikas',
    age: 27
}

export default person;
//to import this :   import person from 'file path';

const anotherPerson = {
    name: 'viky'
};

export { person, anotherPerson};
// for multiple things import { person } from 'path'
// all imports import * as personMethod from 'path' , use personMethod.person