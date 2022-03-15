
var fs = require('fs');

// THIS CODE WILL CRASH IN CASE OF HUGE FILES
// sync procedural process (write-slow)
// var csv = require('csv-parser')
// var fs = require('fs')
// const data = ['name, cost'];
// for(let i=0;i<1e8;i++){
//   data.push(`${i},1`);
// }
// fs.writeFileSync('test.csv', data.join('\n'))


// THIS CODE WILL CRASH IN CASE OF HUGE FILES
// sync procedural process (read-slow)
// const file = fs.readFileSync('test.csv', 'utf-8');
// const lines = file.trim('\n').split('\n');
// lines.shift();
// const sum = lines.reduce((acc, line) => {
//   return acc + parseFloat(line.split(',')[1]);
// }, 0);
// console.log('sum', sum)



// async file stream (write-stream)
(async () => {
  const writeStream = fs.createWriteStream('test.csv');
  for(let i = 0; i<1e8; i++){
    const overWatermark = writeStream.write(`${i},1\n`);
    // pause locig
    if(!overWatermark){
      await new Promise((resolve) =>
        writeStream.once('drain', resolve)
      );
    }
  }
  writeStream.end()
})();



// async file stream (read-stream)
const readStream = fs.createReadStream('test.csv');
let sum = 0;
let unprocessed = '';
readStream.on('data', (chunk)=>{
  let chunkString = unprocessed + chunk.toString();
  unprocessed = '';
  let startIndex = 0;
  for(let ch=startIndex; ch<chunkString.length; ch++){
    if(chunkString[ch] === '\n'){
      const line = chunkString.slice(startIndex, ch);
      const idx = line.indexOf(',');
      const cost = line.slice(idx + 1);
      sum += parseFloat(cost);
      startIndex = ch+1;
    }
  }
  if(chunkString[chunkString.length - 1] !== '\n'){
    unprocessed = chunkString.slice(startIndex);
  }
});
readStream.on('end', () =>{
  console.log('sum', sum);
});