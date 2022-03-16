const fs = require('fs')

var readStream = fs.createReadStream('./readMe.txt', 'utf8');
var writeStream = fs.createWriteStream('./writeMe.txt');

readStream.pipe(writeStream);