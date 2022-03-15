/*
    WORKS ONLY INSEDE async FUNCTION

    This will throw an error : 
        let value = await promise; //// Syntax error

    Because the code snippet is not in async function

        function f() {
            let promise = Promise.resolve(1);
            let result = await promise; //// Syntax error
        }


*/


/* ---- -- - - - -- Basic Syntax (Example without reject) --- - -- - -- - - - */
async function myDisplay1() {
    let myPromise = new Promise(function(resolve, reject) {
      // The argument resolve is pre-defined by JavaScript
      resolve("go to hell 1 !!");
    });
    var promise = await myPromise;
    console.log(promise)
}
myDisplay1();


/* ---- -- - - - -- Waiting for a Timeout --- - -- - -- - - - */
async function myDisplay2() {
    let myPromise = new Promise(function(resolve) {
                        setTimeout(() => {
                            resolve("go to hell 2 !!");}, 
                            3000);
                        }
                    );
    var promise = await myPromise;
    console.log(promise)
  }
myDisplay2();

