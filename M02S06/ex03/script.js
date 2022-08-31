// destructuring for fun
const { readFileSync, read } = require('fs');

const data = readFileSync('./file.txt', 'ascii');

console.log(data);
