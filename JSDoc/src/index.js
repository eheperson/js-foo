
// @ts-nocheck

const {add, subtract, divide, multiply} = require('./calculator');
// import { add, subtract, divide, multiply } from './calculator'; //ES6 import method?

/**
 * @file index.js is the root file for this example
 * @author eheperson
 * @see <a href="https://heperson.com"> eheperson </a>
 */

/**
 * Person Name
 * @type{string}
 */
const personName = "John Doe";

/**
 * Array of grades
 * @type{Array<number>}
 */
const grades = [98, 97.9, 59, 70];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo ={
    id: '2',
    text: 'ello'
};

/**
 * Calculate Tax
 * @param{number} amount - Total amount
 * @param{number} tax - Tax percentage
 * @returns{string} - Total with a dolar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax*amount}`;
};

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name  
 * @property {string|number} age - Student age (optional)
 * @property {boolean} isActive - Student is Active
 */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: "John Doe",
    age: 20,
    isActive: true
}

/**
 * Class to create a person object
 */
class Person{
    /**
     * 
     * @param {Object} personInfo Information about the person
     */
    constructor(personInfo){
        /**
         * @property {string} name Person name
         */
        this.name = personInfo.name;
        /**
         * @property {string} age Person age
         */
        this.age = personInfo.age
    }
    /**
     * @property {Function} greet A greeting with the name and age
     * @return {void}
     */
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
    name: 'John Doe',
    age: 30
});
console.log(person1.greet());