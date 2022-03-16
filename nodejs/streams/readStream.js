const fs = require('fs')

var readStream = fs.createReadStream('readMe.txt', 'utf8');
/*
default size of the buffer : 64kb
last buffer                : remainder
highWaterMark              : this parameters controls the size of the buffer
    

    var readStream = fs.createReadStream('readMe.txt', {encoding:'utf8'});
    var readStream = fs.createReadStream('readMe.txt', {highWateMark:9000});

*/

readStream.on('data', chunk=>{
    console.log('new chunk received ..');
    console.log(chunk);
});

readStream.on('error', err=> {
    console.log(err);
});
readStream.on('end', ()=>{
    console.log("chunk end reached ...")
})