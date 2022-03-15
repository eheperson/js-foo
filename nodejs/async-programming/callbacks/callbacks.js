/*
    A callback is a function called at the completion of a given task; 
    this prevents any blocking, and allows other code to be run in the meantime.
    
    callbacks are the foundation of Node.js

    callbacks prevents program to 'block' - otherwise known as sitting still and waiting
*/
/* -----------------  synchronous programming ------------------------------------*/

// just some procedural programming 
function myDisplayer(some) {
    console.log(some);
}
function myFirst() {
    myDisplayer("Hello");
} 
function mySecond() {
    myDisplayer("Goodbye");
}  
myFirst();
mySecond();

// simple callback example
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

// another callback example
function greeting(name) {
    console.log('Hello ' + name);
}
function processUserInput(callback) {
    var name = "Arthur C. Clarke";
    callback(name);
}
processUserInput(greeting);



