var fs = require('fs');

var data = fs.readdirSync('c:/');
console.log('data', data);

console.log("this comes after");