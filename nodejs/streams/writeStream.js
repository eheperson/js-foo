const fs = require('fs')

var readStream = fs.createReadStream('./readMe.txt', 'utf8');
var writeStream = fs.createWriteStream('./writeMe.txt');

readStream.on('data', chunk=>{
    console.log('new chunk received ..');
    writeStream.write(chunk);
});

readStream.on('end', ()=>{
    console.log("chunk end reached ...")
});