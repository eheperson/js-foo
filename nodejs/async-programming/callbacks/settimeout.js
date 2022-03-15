// settimeout with callback
function hello() {
    console.log('Hello World!');
}
setTimeout(hello, 5000); // wait 5000 ms and then run the code

// settimeout with callback
// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process
