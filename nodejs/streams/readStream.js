const fs = require('fs')

var readStream = fs.createReadStream('readMe.txt', 'utf8');

readStream.on('data', chunk=>{
    console.log('new chunk received ..');
    console.log(chunk);
});

readStream.on('end', ()=>{
    console.log("chunk end reached ...")
})