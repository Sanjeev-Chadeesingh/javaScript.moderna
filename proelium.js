console.log('Hiyah There!');
// console.log('How\'s it goin?');
// var x = 13;
// console.log(typeof x);
// let age = 72;
// console.log(age);
// let hens = 4;
// let roosters = 2;
// hens = hens - 1;
// let chickens = hens + roosters;
// console.log('--------------------------------');
// let str = 'superhero';
// console.log(str.slice(0, 5));
// console.log('Logs: "super"');    
// console.log('Fighting is entertaining.'.replace('entertaining', 'brutal'));
// let strThree = 'Hiyah There';
// console.log(strThree.replace('There', 'You'));
// console.log(strThree);
// let animal = 'dog';
// let sound = 'bark';
// console.log(`${animal} says ${sound}`);
// let item = 'cucumbers';
// let price = 1.99;
// let quantity = 4;
// console.log(`You bought ${quantity} ${item}, total price: $${price*quantity}`);
// const minAge = 21;
// let yourAge = 19;
// let strFour = `You must be ${minAge} to enter. Come back in ${minAge - yourAge} years`;
// console.log(strFour);
// console.log('-------------------');
// console.log('Math Object');
// var randNum = Math.floor(Math.random() * 10) + 1;
// console.log(randNum);
// console.log('-------------------');
// console.log('parseInt and parseFloat');
// var one = parseInt('33');
// console.log(one);
// var two = parseFloat('33.5');
// console.log(two);
// console.log('parseInt: ' + one, 'parseFloat: ' + two);
// console.log('---------------------------');
// console.log('LOGIC+FLOW');
// var a = 'a';
// var A = 'A';
// console.log(a < A);
// console.log(a > A);
// console.log('Strict Unequality: ', + 7 !== '7');
// console.log('Yep');
// console.error('Oh NOOO!');
// if(1 === 1) {
//     console.log('It\'s true!!');
// };
// let rating = 3;
// if(rating <= 2) {
//     console.error('You need to do more work!');
// } else {
//     console.log('You are a superstar!');
// }
// let num = 37;
// if(num % 2 !== 0) {
//     console.log('Odd!');
// } else {
//     console.log('Even!');
// }
// var ageTwo = 23;
// if(ageTwo < 21) {
//     console.log('Can\'t come in.');
// } else if(ageTwo === 21) {
//     console.log('Happy Birthday, free drink on us!');
// } else {
//     console.log('Come on in, be responsible!');
// }
// let highScore = 1430;
// let userScore = 1200;
// if(userScore >= highScore) {
//     console.log(`Congrats! You have the new highscore of ${userScore}`);
// } else {
//     console.log(`Apoligies, ${userScore} is not enough to make it on the list!`);
// }
// let password = 'hellokitty';
// if(password.length >= 6) {
//     if(password.indexOf(' ') === -1) {
//         console.log('Valid password');
//     } else {
//         console.log('Password is long enough, but cannot contain spaces.');
//     }

// } else {
//     console.log('Your password must be longer');
// }
// let mystery = 5;
// if(mystery) {
//     console.log('truthy');
// } else {
//     console.log('falsy');
// };
// console.log('LOGICAL OPERATORS');
// //can look at password and join first two statements for logical operator work
// let flavor = 'grape';
// if(flavor !== 'grape' && flavor !== 'cherry') {
//     console.log('We do not have that flavor.');
// }

// if(!(flavor === 'grape' || flavor === 'chearry')) {
//     console.log('We do not have that flavor.');
// }
// console.log(flavor);
// console.log('---------------');
// console.log('Switch Statements');
// var day;
// switch(day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3: 
//         console.log('Wednesday');
//         break;
//     case 4: 
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('???');
// }
// console.log('Ternary Operator');
// var numX = 7;
// if(numX === 7) {
//     console.log('Lucky');
// } else {
//     console.log('Unlucky');
// }
// numX === 7 ? console.log('Lucky') : console.log('Unlucky');
// let status = 'offline';
// let color = status === 'offline' ? 'red' : 'green';
console.log('-----------------------');
console.log('Working with Arrays');
// let shoppingList = ['cereal', 'cheese', 'ice'];
// let lotto = [45, 12, 23, 25, 35];
// let myCollection = [12, 'dog', true, null, NaN];
// console.log(myCollection);
// console.log(myCollection.length);
// shoppingList[0] = 'ribeye steak';
// console.log(shoppingList);
//to add to the end of the array:
// // shoppingList[shoppingList.length] = 'Tomatoes';
// console.log(shoppingList);
// shoppingList.push('carrots');
// console.log(shoppingList);
// shoppingList.pop();
// console.log(shoppingList);
// let dishesToDo = ['big platter'];
// dishesToDo.unshift('small platter');
// console.log(dishesToDo);
// dishesToDo.unshift('mug', 'cereal bowl');
// console.log(dishesToDo);
// dishesToDo.shift('mug');
// console.log(dishesToDo);
// dishesToDo.shift('cereal bowl', 'small platter');
// console.log(dishesToDo);
// console.log('Concat Method');
let arrOne = ['apple', 'banana'];
let arrTwo = ['asparagus', 'brussel sprouts'];
let arrThree = ['steak', 'chicken breast']
console.log(arrOne.concat(arrTwo));
// puts arrOne first, order matters!!
let arrAll = arrOne.concat(arrTwo, arrThree);
console.log(arrAll);
console.log('Includes Method');
console.log(arrTwo.includes('asparagus'));
console.log('Can search from a certain point by adding said point after said element');
console.log(arrTwo.includes('brussel sprouts', [0]));
console.log('indexOf Method');
console.log(arrTwo.indexOf('asparagus'));
// can also use parameter like includes for where within the index you want the search to begin
// includes is good just for checking for presence of something, indexOf will give you the presence and the location
console.log('Join Method');
console.log('Reverse Method');
arrOne.reverse();
console.log(arrOne);
console.log(arrTwo.join());
console.log('Default separator is a comma, but can change it via args within method');
console.log(arrTwo.join('-'));
console.log('Slice Method');
let arrFive = ['shark', 'salmon', 'whale', 'bear', 'dog', 'cat'];
let swimmers = arrFive.slice(0, 3);
let runners = arrFive.slice(2, arrFive.length);
console.log(runners);
console.log(swimmers);
console.log(arrFive.slice(-3, -1));
console.log('Splice Method');
// adding using splice below
arrFive.splice(1, 0, 'octopus');
console.log(arrFive);
arrFive.splice(3, 2);
console.log(arrFive);
let arrSix = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
arrSix.splice(1, 0, 'octopus');
console.log(arrSix);
//deleting whale and bear
arrSix.splice(3, 2);
console.log(arrSix);
arrSix.splice(3, 0, 'whale', 'bear');
console.log(arrSix);
arrSix.splice(3, 0, 'snake', 'frog');
console.log(arrSix);
arrSix.splice(0, 2, 'SHARK', 'OCTOPUS');
//replacing first two items
console.log(arrSix);
let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
people.sort();
console.log(people);
let nums = [34, 10, 100000, 67, 99];
nums.sort();
console.log(nums);
let fruit = 'orange';
let color = fruit;
fruit = 'watermelon';
console.log(color);
let numsOne = [5, 6, 7, 8];
//above array is not stored in numsOne, a reference to it is.
let otherNums = nums;
nums.push(9);
console.log(nums);
console.log(otherNums);
console.log('const with Arrays');
const city = 'Lisbon';
// city = 'Orlando';
//this below doesn't work. const is CONSTANT, below log is an error
// console.log(city);
console.log('Nesting Arrays');
const animalPairs = [
    ['doe', 'buck'],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];
console.log(animalPairs[2][0]);
console.log('---------------------------------');
console.log('OBJECTS');
const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2.13',
    45: 'forty five'
};
console.log(fitBitData);
console.log(fitBitData.totalSteps);
console.log(fitBitData.workoutsThisWeek);
console.log(fitBitData[45]);
let data = { a: 1, b : 2, c: 3 };
const numbers = {
    100: 'one hundred',
    16: 'sixteen',
    '76 trombones': 'great song!'
};
console.log(numbers[100]);
console.log(numbers['76 trombones']);
const userReviews = {};
userReviews['queenBee49'] = 4.0;
console.log(userReviews);
userReviews.mrSmith78 = 3.5;
console.log(userReviews);
userReviews.colt = '5';
console.log(userReviews);
userReviews.colt = 5;
console.log(userReviews);
userReviews.mrSmith78 += 1.5;
console.log(userReviews);
const student = {
    firstName: 'Sanjeev',
    lastName: 'Chadeesingh',
    strengths: ['Reading', 'Writing'],
    exams: {
        midterm: 92,
        final: 88
    }
};
let testAverage = (student.exams.midterm + student.exams.final) / 2;
console.log(testAverage);
let numz = [1, 2, 3];
let myztery = [1, 2, 3];
console.log(numz === myztery);
//above log returns false
let moreNumz = numz;
console.log(moreNumz === numz);
//above log returns true, with double or triple equals
const uzer = {
    username: 'Cherrygarcia8',
    email: 'garcia@gmail.com',
    notifications: []
};

// if(uzer.notifications === []) {
//     console.log('No new notifications!');
// };
//above doesn't work.
if(!uzer.notifications.length) {
    console.log('No new notifications!');
}
//above works
console.log('------------------------');
console.log('For Loops');
for(var i = 0; i < 11; i++) {
    console.log(`I am number ${i}`);
}
for(var i = 1; i <= 20; i++) {
    console.log(`${i}x${i} = ${i * i}`);
}
//countdown from 200 to 0 in increments of 25
for(var i = 200; i >= 0; i -= 25) {
    console.log(i);
}
const creatures = ['lions', 'tigers', 'bears'];
for(var i = 0; i < creatures.length; i++) {
    console.log(`${creatures[i]} oh my!`);
}
console.log(creatures.length);
var myStudents = [
    {
        firstName: 'Zeus',
        grade: 86
    },
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 72
    },
    {
        firstName: 'Apollo',
        grade: 90
    }
];
let total = 0;
var average;
for(var i = 0; i < myStudents.length; i++) {
    // console.log(`${myStudents[i].firstName} got a ${myStudents[i].grade} on the test.`);
    //OR
    let student = myStudents[i];
    // console.log(`${student.firstName} got a ${student.grade} on the test`);
    average = (total += student.grade) / (myStudents.length);
    console.log(average);
}
// const word = 'stressed';
// let reversedWord = ' ';
// for(var i = word.length - 1; i >=0; i--) {
//     // console.log(i);
//     console.log(word[i]);
//     reversedWord += word[i];
//     console.log(reversedWord);
// }
console.log('------------------------');
console.log('Nested Loops');
// for(var i = 0; i <=10; i++) {
//     console.log('OUTER LOOP: ', i);
//     for(var j = 10; j >= 0; j-=2) {
//         console.log('   INNER LOOP: ', j);
//     }
// };
const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];
let sum = 0;
for(let i = 0; i < gameBoard.length; i++) {
    console.log(gameBoard[i]);
    let row = gameBoard[i];
    for(let j = 0; j < row.length; j++) {
        sum += row[j];
        console.log(sum);
    }
}
console.log('------------------------');
console.log('While Loops');
for(let i = 0; i < 10; i++) {
    console.log(i);
};

let j = 0;
while(j < 10) {
    console.log(j);
    j++;
}