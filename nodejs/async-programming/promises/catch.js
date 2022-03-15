/*


    catch() is invoked when a promise is either rejected or some error has occurred in execution. 
    It is used as an Error Handler whenever at any step there is a chance of getting an error.


    catch() method takes one function as parameter. 

        - Function to handle errors or promise rejections.
        - .catch() method internally calls .then(null, errorHandler) 
        - .catch() is just a shorthand for .then(null, errorHandler) 


    SYNTAX:

    .catch(function(error){
            //handle error
        })

*/

/*  --------- Example: Promise Resolved --------------------------- */
var promiseResolved = new Promise(function(resolve, reject) {
    reject('Enivicivokkie Rejected')
})
promiseResolved.then(function(successMessage) {
        console.log(successMessage);
    }).catch(function(errorMessage) {
       //error handler function is invoked
        console.log(errorMessage);
    }
);

/*  --------- Examples: Promise Rejected --------------------------- */
var promiseRejected = new Promise(function(resolve, reject) {
    // throw new Error('Some error has occurred')
    reject('Some error has occurred')
})
promiseRejected.then(function(successMessage) {
        console.log(successMessage);
    }).catch(function(errorMessage) {
       //error handler function is invoked
        console.log(errorMessage);
    }
);




