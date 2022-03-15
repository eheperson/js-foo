/*


    The keyword async before a function makes the function return a promise:

    "async and await make promises easier to write"

        async:  makes a function return a Promise

        await: makes a function wait for a Promise
    
    The async and await keywords enable asynchronous, promise-based behavior 
    to be written in a cleaner style, 
    avoiding the need to explicitly configure promise chains.

*/

async function asyncFunction() {
    console.log("Hello");
}
// the function above is the same with the below
function promiseFunction() {
    console.log(Promise.resolve("Hello"));
}
asyncFunction();
promiseFunction();


/* ---- -- - - - -- Some Examples with async and Promise() --- - -- - -- - - - */
async function f1() {
    return 1;
}
f1().then(console.log("OK f1()"));

// We could explicitly return a promise, which would be the same
async function f2() {
    return Promise.resolve(1);
}
f2().then(console.log("OK f2()"));