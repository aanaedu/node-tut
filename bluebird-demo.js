var fs = require('fs');
var bluebird = require('bluebird');


// With 
bluebird.promisifyAll(fs);

fs.readFileAsync('./data2.json')
	.then(JSON.parse)
	.then(function (val) {
		console.log(val);
	})
	.catch(SyntaxError, function(e) {
		console.error("invalid json in file");
	})
	.catch(function(e) {
		console.log("unable to read file")
	})

// fs.readFile('./data3.json', 'utf-8', function(err, data){
// 	if(err) {
// 		console.log("unable to read file")
// 	} else {
// 		try {
// 			data = JSON.parse(data);
// 			console.log(data);

// 		} catch (e) {
// 			console.error("invalid json in file");
// 		}
// 	}

// })
