//JS is single threaded
	//runs one thing at a time
	//

//this logs immediately
console.log('I happen FIRST');
//this breaks the stack, and must be cleared first
alert('Hi There!');
//this will still happen third
	//browser, not JS, sets this timeout
		//web API runs this, can go to latentflip.com/loupe for info
setTimeout(() => {
	console.log('I happen THIRD');
}, 3000);
//this logs only after closing the alert
console.log('I happen SECOND');


// console.log('First');

// setTimeout(() => {
// 	console.log('Third');
// }, 3000);

// console.log('Second');