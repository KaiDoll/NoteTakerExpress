const fs = require('fs'); 
const util = require('util');
//create variable called readfile util.promisify(fs.readfile)
const readNotes = util.promisify(fs.readFile); //convert the fs.readFile into a promise-based function using util.
//writefile similar to readfile
const writeNotes = util.promisify(fs.writeFile);


//create a class with a methods read/write/get note/add note should exports




module.exports = { readNotes, writeNotes };
//uuvid for bonus FOR DELETE