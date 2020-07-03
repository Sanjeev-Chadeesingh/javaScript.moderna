console.log('Hiyah There!');
console.log('How\'s it goin?');
var x = 13;
console.log(typeof x);
let age = 72;
console.log(age);
let hens = 4;
let roosters = 2;
hens = hens - 1;
let chickens = hens + roosters;
console.log('--------------------------------');
let str = 'superhero';
console.log(str.slice(0, 5));
console.log('Logs: "super"');    
console.log('Fighting is entertaining.'.replace('entertaining', 'brutal'));
let strThree = 'Hiyah There';
console.log(strThree.replace('There', 'You'));
console.log(strThree);
let animal = 'dog';
let sound = 'bark';
console.log(`${animal} says ${sound}`);
let item = 'cucumbers';
let price = 1.99;
let quantity = 4;
console.log(`You bought ${quantity} ${item}, total price: $${price*quantity}`);
const minAge = 21;
let yourAge = 19;
let strFour = `You must be ${minAge} to enter. Come back in ${minAge - yourAge} years`;
console.log(strFour);
console.log('-------------------');
console.log('Math Object');
var randNum = Math.floor(Math.random() * 10) + 1;
console.log(randNum);
console.log('-------------------');
console.log('parseInt and parseFloat');
var one = parseInt('33');
console.log(one);
var two = parseFloat('33.5');
console.log(two);
console.log('parseInt: ' + one, 'parseFloat: ' + two);
console.log('---------------------------');
console.log('LOGIC+FLOW');
var a = 'a';
var A = 'A';
console.log(a < A);
console.log(a > A);
console.log('Strict Unequality: ', + 7 !== '7');
console.log('Yep');
console.error('Oh NOOO!');
if(1 === 1) {
    console.log('It\'s true!!');
};
let rating = 3;
if(rating <= 2) {
    console.error('You need to do more work!');
} else {
    console.log('You are a superstar!');
}
let num = 37;
if(num % 2 !== 0) {
    console.log('Odd!');
} else {
    console.log('Even!');
}
var ageTwo = 23;
if(ageTwo < 21) {
    console.log('Can\'t come in.');
} else if(ageTwo === 21) {
    console.log('Happy Birthday, free drink on us!');
} else {
    console.log('Come on in, be responsible!');
}
let highScore = 1430;
let userScore = 1200;
if(userScore >= highScore) {
    console.log(`Congrats! You have the new highscore of ${userScore}`);
} else {
    console.log(`Apoligies, ${userScore} is not enough to make it on the list!`);
}
let password = 'hellokitty';
if(password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log('Valid password');
    } else {
        console.log('Password is long enough, but cannot contain spaces.');
    }

} else {
    console.log('Your password must be longer');
}