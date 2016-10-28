var promise = new Promise(function(resolve, reject){
	// resolve(); //returns then
	reject(); // returns catch
});

promise.then(function () {
	console.log('then');
})
.catch(function () {
	console.error('catch');
})
