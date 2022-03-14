//  to run this on node : $node app.js or $node app
/*
GLOBALS - NO WINDOW
__dirname - path to current 
__filename - file name
require    - function to use modules (CommonJS)
module     - info about current module (file)
process    - info about env where the program is being executed

*/

console.log(__dirname)

setInterval(() => {
  console.log('hello world')
}, 1000)
 

console.log('hello from node')

const amount = 12
if (amount<10){
    console.log('small number')
} else {
    console.log('large number')
}

console.log('enivicivokki')