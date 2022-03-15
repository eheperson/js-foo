const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);

var run = async ()=>{
    //promise version
    read('data.txt').then(data => {
        console.log(data.toString());
    });
    console.log("\npromise version\n")

    // async/await version
    const data = await read('data.txt');
    console.log("\nasync/await version\n");
    console.log(data.toString());
};

run();