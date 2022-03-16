const fs = require('fs');

console.log('start');

// This approach will crash the app if you are trying to read huge files

for(let i=0; i<100; i++){
    fs.writeFileSync(__dirname+'/writeMe.txt',
                    `${i} - ${i**2} - ${i**3} - ${i**4} - ${i**5} \n`, 
                    {flag:'a'});
                    // a : edit mode
}
