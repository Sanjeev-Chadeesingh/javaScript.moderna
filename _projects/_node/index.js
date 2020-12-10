// //this require statement is a relative path to the file needed to run this file
// const message = require('./myScript');

// console.log(message);

// // console.log(require);
const counterObject = require('./myScript.js');

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require('./myScript.js');
console.log(newCounterObject.getCounter());
//total output: 0 newLine 1 newLine 1
    //second require statement is going in order, so one gets logged twice