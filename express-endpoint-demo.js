var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');

app.use('/message', function(req, res){
	console.log();

	res.send("hello")
});

app.use('/users', function(req, res){
	fs.readFile('./data1.json', 'utf-8', function(err, data){
		res.send(data);
	})
})

app.listen(8080, function(){
	console.log("listening at 8080");
});
