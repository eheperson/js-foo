/*

Promises are used to handle asynchronous operations in JavaScript.

They are easy to manage when dealing with multiple asynchronous operations 
where callbacks can create callback hell leading to unmanageable code. 


A Promise has four states: 
    fulfilled: Action related to the promise succeeded
    rejected: Action related to the promise failed
    pending: Promise is still pending i.e. not fulfilled or rejected yet
    settled: Promise has fulfilled or rejected

SYNTAX : 
    var promise = new Promise(function(resolve, reject){
        //do something
    });

    1- Promise constructor takes only one argument which is a callback function.
    2- Callback function takes two arguments, resolve and reject
    3- Perform operations inside the callback function and if everything went well then call resolve.
    4- If desired operations do not go well then call reject.

    Promises can be consumed by registering functions using .then and .catch methods.
    CHECK THE then.js and catch.js

*/

/*  --------- Example Promise Syntax --------------------------- */
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
      myResolve(); // when successful
      myReject();  // when error
    });
    
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { console.log("Success !") },
    function(error) { console.log("Failed !")}
);
// Success	myResolve(result value)
// Error	myReject(error object)


