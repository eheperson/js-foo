/*

    then() is invoked when a promise is either resolved or rejected. 
    
    It may also be defined as a career which takes data from promise 
    and further executes it successfully.


    then() method takes two functions as parameters. 

    First parameter  : function is executed if promise is resolved and a result is received.
    Second parameter : function is executed if promise is rejected and an error is received.

    - It is optional and there is a better way to handle error using .catch() method
    
    SYNTAX : 

        .then(function(result){
                //handle success
            }, function(error){
                //handle error
            })

*/


/*  --------- Example: Promise Resolved --------------------------- */
var promiseResolved = new Promise(function(resolve, reject) {
    resolve('Enivicivokkie Resolved');
})
promiseResolved.then(function(successMessage) {
       //success handler function is invoked
        console.log(successMessage);
    }, function(errorMessage) {
        console.log(errorMessage);
    }
)

/*  --------- Examples: Promise Rejected --------------------------- */
var promiseRejected = new Promise(function(resolve, reject) {
	reject('Enivicivokkie Rejected')
})

promiseRejected.then(function(successMessage) {
		console.log(successMessage);
	}, function(errorMessage) {
	//error handler function is invoked
		console.log(errorMessage);
	}
)

