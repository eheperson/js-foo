const fs = require('fs');

console.log('start');

// This approach will crash the app if you are trying to read huge files
const txt1 = fs.readFileSync(__dirname + '/readMe1.txt', 'utf8');
const txt2 = fs.readFileSync(__dirname + '/readMe2.txt', 'utf8');

console.log(txt1);
console.log(txt2);