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
// let arrOne = ['apple', 'banana'];
// let arrTwo = ['asparagus', 'brussel sprouts'];
// let arrThree = ['steak', 'chicken breast']
// console.log(arrOne.concat(arrTwo));
// puts arrOne first, order matters!!
// let arrAll = arrOne.concat(arrTwo, arrThree);
// console.log(arrAll);
// console.log('Includes Method');
// console.log(arrTwo.includes('asparagus'));
// console.log('Can search from a certain point by adding said point after said element');
// console.log(arrTwo.includes('brussel sprouts', [0]));
// console.log('indexOf Method');
// console.log(arrTwo.indexOf('asparagus'));
// can also use parameter like includes for where within the index you want the search to begin
// includes is good just for checking for presence of something, indexOf will give you the presence and the location
// console.log('Join Method');
// console.log('Reverse Method');
// arrOne.reverse();
// console.log(arrOne);
// console.log(arrTwo.join());
// console.log('Default separator is a comma, but can change it via args within method');
// console.log(arrTwo.join('-'));
// console.log('Slice Method');
// let arrFive = ['shark', 'salmon', 'whale', 'bear', 'dog', 'cat'];
// let swimmers = arrFive.slice(0, 3);
// let runners = arrFive.slice(2, arrFive.length);
// console.log(runners);
// console.log(swimmers);
// console.log(arrFive.slice(-3, -1));
// console.log('Splice Method');
// adding using splice below
// arrFive.splice(1, 0, 'octopus');
// console.log(arrFive);
// arrFive.splice(3, 2);
// console.log(arrFive);
// let arrSix = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
// arrSix.splice(1, 0, 'octopus');
// console.log(arrSix);
//deleting whale and bear
// arrSix.splice(3, 2);
// console.log(arrSix);
// arrSix.splice(3, 0, 'whale', 'bear');
// console.log(arrSix);
// arrSix.splice(3, 0, 'snake', 'frog');
// console.log(arrSix);
// arrSix.splice(0, 2, 'SHARK', 'OCTOPUS');
//replacing first two items
// console.log(arrSix);
// let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
// people.sort();
// console.log(people);
// let nums = [34, 10, 100000, 67, 99];
// nums.sort();
// console.log(nums);
// let fruit = 'orange';
// let color = fruit;
// fruit = 'watermelon';
// console.log(color);
// let numsOne = [5, 6, 7, 8];
//above array is not stored in numsOne, a reference to it is.
// let otherNums = nums;
// nums.push(9);
// console.log(nums);
// console.log(otherNums);
// console.log('const with Arrays');
// const city = 'Lisbon';
// city = 'Orlando';
//this below doesn't work. const is CONSTANT, below log is an error
// console.log(city);
// console.log('Nesting Arrays');
// const animalPairs = [
//     ['doe', 'buck'],
//     ['ewe', 'ram'],
//     ['peahen', 'peacock']
// ];
// console.log(animalPairs[2][0]);
// console.log('---------------------------------');
// console.log('OBJECTS');
// const fitBitData = {
//     totalSteps: 308727,
//     totalMiles: 211.7,
//     avgCalorieBurn: 5755,
//     workoutsThisWeek: '5 of 7',
//     avgGoodSleep: '2.13',
//     45: 'forty five'
// };
// console.log(fitBitData);
// console.log(fitBitData.totalSteps);
// console.log(fitBitData.workoutsThisWeek);
// console.log(fitBitData[45]);
// let data = { a: 1, b : 2, c: 3 };
// const numbers = {
//     100: 'one hundred',
//     16: 'sixteen',
//     '76 trombones': 'great song!'
// };
// console.log(numbers[100]);
// console.log(numbers['76 trombones']);
// const userReviews = {};
// userReviews['queenBee49'] = 4.0;
// console.log(userReviews);
// userReviews.mrSmith78 = 3.5;
// console.log(userReviews);
// userReviews.colt = '5';
// console.log(userReviews);
// userReviews.colt = 5;
// console.log(userReviews);
// userReviews.mrSmith78 += 1.5;
// console.log(userReviews);
// const student = {
//     firstName: 'Sanjeev',
//     lastName: 'Chadeesingh',
//     strengths: ['Reading', 'Writing'],
//     exams: {
//         midterm: 92,
//         final: 88
//     }
// };
// let testAverage = (student.exams.midterm + student.exams.final) / 2;
// console.log(testAverage);
// let numz = [1, 2, 3];
// let myztery = [1, 2, 3];
// console.log(numz === myztery);
//above log returns false
// let moreNumz = numz;
// console.log(moreNumz === numz);
//above log returns true, with double or triple equals
// const uzer = {
//     username: 'Cherrygarcia8',
//     email: 'garcia@gmail.com',
//     notifications: []
// };

// if(uzer.notifications === []) {
//     console.log('No new notifications!');
// };
//above doesn't work.
// if(!uzer.notifications.length) {
//     console.log('No new notifications!');
// }
//above works
// console.log('------------------------');
// console.log('For Loops');
// for(var i = 0; i < 11; i++) {
//     console.log(`I am number ${i}`);
// }
// for(var i = 1; i <= 20; i++) {
//     console.log(`${i}x${i} = ${i * i}`);
// }
//countdown from 200 to 0 in increments of 25
// for(var i = 200; i >= 0; i -= 25) {
//     console.log(i);
// }
// const creatures = ['lions', 'tigers', 'bears'];
// for(var i = 0; i < creatures.length; i++) {
//     console.log(`${creatures[i]} oh my!`);
// }
// console.log(creatures.length);
// var myStudents = [
//     {
//         firstName: 'Zeus',
//         grade: 86
//     },
//     {
//         firstName: 'Artemis',
//         grade: 97
//     },
//     {
//         firstName: 'Hera',
//         grade: 72
//     },
//     {
//         firstName: 'Apollo',
//         grade: 90
//     }
// ];
// let total = 0;
// var average;
// for(var i = 0; i < myStudents.length; i++) {
    // console.log(`${myStudents[i].firstName} got a ${myStudents[i].grade} on the test.`);
    //OR
    // let student = myStudents[i];
    // console.log(`${student.firstName} got a ${student.grade} on the test`);
    // average = (total += student.grade) / (myStudents.length);
    // console.log(average);
// }
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
// const gameBoard = [
//     [4, 32, 8, 4],
//     [64, 8, 32, 2],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2]
// ];
// let sum = 0;
// for(let i = 0; i < gameBoard.length; i++) {
//     console.log(gameBoard[i]);
//     let row = gameBoard[i];
//     for(let j = 0; j < row.length; j++) {
//         sum += row[j];
//         console.log(sum);
//     }
// }
// console.log('------------------------');
// console.log('While Loops');
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// };

// let j = 0;
// while(j < 10) {
//     console.log(j);
//     j++;
// }
// while(guess !== target) {
//     console.log(guess);
//     guess = Math.floor(Math.random() * 10);
// }
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(true) {
//     if(target === guess) break;
//     console.log(`Target: ${target} Guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`Congrats you win!!`);
console.log('--------------------------');
console.log('For...Of Loop');
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
// for(let i = 0; i < subreddits.length; i++) {
//     console.log(subreddits[i]);
// }

// for(let element of subreddits) {
//     console.log(element);
// }

// for(let char of 'cockadoodledoo') {
//     console.log(char.toUpperCase());
// };
// const magicSquare = [
//     [2, 7, 6],
//     [9, 5, 1],
//     [4, 3, 8]
// ];
// for(let i = 0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for(let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }
//shifters are kept in a suspended state of transformation from human to animal, and when they die, the transformation is complete, explain the famous maneaters in such fashion
// for(let i = 0; i < magicSquare.length; i++) {
//     var total = 0;
//     var sum = 0;
//     var row = magicSquare[i];
//     for(let j = 0; j < row.length; j++) {
        
//         sum += row[j]; 
       
        
//     }
//     console.log(total = sum * magicSquare.length); break;
    
    
// };
// for(let row of magicSquare) {
//     let sum = 0;
//     for(let num of row) {
//         sum += num;
//     }
//     console.log(sum);
// }
const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];
const words3 = ['', '', '', ''];
for(let i = 0; i < words1.length; i++) {
    let firstHalf, secondHalf;
    firstHalf = words1[i];
    for(let j = 0; j < words2.length; j++) {
        secondHalf = words2[i];
    }
    console.log(`${firstHalf + secondHalf}`)
}
console.log('----------------------');
console.log('Looping/Iterating over objects');
const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges' : 9,
    Amadeus : 10,
    'Kill Bill' : 8,
    'Little Miss Sunshine' : 8.5,
    Coraline: 7.5
};
// console.log(Object.keys(movieReviews));
// console.log(Object.values(movieReviews));
// for(let title of Object.keys(movieReviews)) {
//     // console.log(title);
//     console.log(title, movieReviews[title]);
// }
// const ratings = Object.values(movieReviews);
// let total = 0;
// for(let average of ratings) {
//     total += average;
// }
// console.log(total / ratings.length);
console.log('---------------------------');
console.log('for...in loops');
// const jeapordyWinnings = {
//     regularPlay: 2522700,
//     watsonChallenge: 300000,
//     tournamentOfChampions: 500000,
//     battleOfTheDecades: 100000
// };
// let total = 0;
// for(let key in jeapordyWinnings) {
//     total += jeapordyWinnings[key];
//     console.log(`Sitch: ${key}, total money won: ${jeapordyWinnings[key]}`);
//     //you gotta come out of the loop to get a finished statement from it!
// }
// console.log(`Total Earnings: ${total}.`);
// for(let key in [88 , 99, 77, 66]) {
//     console.log(key);
//     //outputs the indices
// }
// const magicSquare = [
//     [2, 7, 6],
//     [9, 5, 1],
//     [4, 3, 8]
// ];

// for(let i = 0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for(j = 0; j < row.length; j++) {
//         sum += row[j];
//     }
//     var total = sum * magicSquare.length; 
//     console.log(total); break;
// }
// start at 300 and count back in 10's to 0
// let count = 300;
// while(count >= 0) {
//     count -= 10;
//     console.log(count);
// }
console.log('-----------------------------');
console.log('Functions');
//6/8/2020 10:10AM
//GOALS:
//write valid functions
//write functions with arguments
//compare function expressions & function statements
//write a buncha functions
//Reusable Procedures
    //allow us to write reusable, modular code
    //we define a chunnk of code that we can execute at a later point
    //we use them all the time
//2 step process: 1-Define (how this should work/ registering it/ 'filling out forms') 2-Execute (run it)
//Methods are built in functions
// console.log('hello'.toUpperCase());
//use parenthesis to call them
//Function Declaration/Statement
//function someName(args(if args)) { some code that runs when function is called };
function hiyah() {
    console.log('hello'.toUpperCase());
    console.log('Booyah!');
    console.log('Yeeha!');
};

hiyah();
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${roll}`);
}

//can call functions in functions
// rollDie();
function throwDice(numRolls) {
    for(let i = 0; i < numRolls; i++) {
        rollDie();
    }
    //could've looped instead of manual entry
}

throwDice(3);

//Function Arguments
    //args are inputs to a function
function greet(person) {
    console.log(`Hello, ${person}!`);
}
greet('Sanjeev');
//functions with multiple arguments
function square(num) {
    console.log(num*num);
};
square(4);
//4 is the argument when you call it, num is the parameter (placeholder) when you run it
function sum(x, y) {
    // console.log(x + y);
    return x + y;
};

//RETURN! 
    //built-in methods return values when we call them, we can store these values
let scream = 'hello'.toUpperCase();
    //when arrow in chrome dev console points left, it is a return value
    //returns are good and useful because you can pass them through to other things/functions and store them in variables
    //if no value is returned there is no output
        //But you can capture return values in variables!
//June 9th 10:20
//Return values redux
//can only return once in a function, for one value!
    //if need to return x and y from sum, can return them in an array or an object, just has to be one thing
let uppity = 'hello'.toUpperCase();
console.log(uppity);
let zed = sum(5, 5);
console.log(`ZED: ${zed}`);
function divide(a, b) {
    console.log(a / b);
};
divide(9, 3);
//Return Execution
    //the return statement ends function execution AND specifies the value to be returned by that function
function isPurple(color) {
    if(color.toLowerCase() === 'purple') {
        return true;
    }
        //removed the else for DRY-ness
        return false;
};
//above is good example of if/else letting you have multiple possible returns. As soon as one of the returns above runs, the function's execution is stopped
function containsPurple(arr) {
    for(let color of arr) {
        if(color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
    //return is put here, outside of the loop, because the moment it comes across something not in the array, it'll break the loop and not allow itself to see the other items in the array to accurately determine whether someting is in the array or not
}
console.log('-------------------------');
console.log('FUNCTION PRACTICE');
console.log('passwordValidator');
function isValidPassword(password, username) {
   if(password.length < 8) {
       return false;
   }
   if(password.indexOf(' ') !== -1) {
       return false;
   }
   if(password.indexOf(username) !== -1) {
       return false;
   }
   return true;
};
var test = isValidPassword('happyMan1234', 'happyMan');
console.log(test);
//can refactor this with a chain of or's + false
console.log('average');
// function average(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };
let arrrOne = [1, 2, 3, 4, 5];
// var testOne = average(arrrOne);
// console.log(testOne);
// function average(arr) {
//     let sum = 0;
//     for(let iterator of arr) {
//         sum += iterator;
//     }
//     return sum / arr.length;
// };
// console.log(average(arrrOne));
// console.log('------------------');
// console.log('pangram');
// // let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let zedOne = 'The quick brown fox jumps over the lazy dog.';
// let zedTwo = 'The end is near.';
// function isPangram(str) {
//     let newStr = str.toLowerCase();
//     for(let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if(newStr.indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return true;
// };
// isPangram(zedOne);
// isPangram(zedTwo);
// console.log('------------------');
// console.log('getCard exercise');
// const cards = {
//     values: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'],
//     suits: ['clubs', 'spades', 'hearts', 'diamonds']
// }
// function getCard() {
//     let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'];
//     let suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     let valueIDS = Math.floor(Math.random() * values.length);
//     let suitsIDS = Math.floor(Math.random() * suits.length);
//     let value = values[valueIDS];
//     let suit = suits[suitsIDS];
//     // console.log(`${value} of ${suit}`);
//     return {value: value, suit: suit};
// }
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// console.log(getCard(cards));
console.log('Functions in detal!!');
//GOALS
    //understand scope
    //write higher order functions
    //pass functions as callbacks
//scope - variable visibility
    //the location where a variable is defined dictates where we have access to that variable
        //FUNCTION SCOPE
            //defined within the function:
            /*
            function lol() {
                let person = 'Tom';
            }
            person is defined within the function, and isn't accessible outside of it
            */ 
        //BLOCK SCOPE
            /*
            let radius = 8;
            if(radius > 0) {
                const PI = 3.14;
                let circ = 2 * PI * radius;
            }
            PI and circ are scoped to the block, can't do anything with them outside the block
            if(true) {
                var animal = 'eel';
            }
            console.log(animal);
            -this above WILL work, can log animal outside the block
            -let is good for forLoops, scopes the iterator to the block, var won't, access to iterator is available regardless where you are
            -let and const cannot be reused if in same block, var can
            -----------------------------
            function doubleArr(arr) {
                const result = [];
                for(let num of arr) {
                let double = num * 2;
                result.push(double);
            }
                return result;
            };
            console.log(doubleArr([1, 2, 3]));
            ------------------------------
            if had set vars instead of lets and consts, could have logged things inside and out of blocks within function and loop
            -you have access in a block to variables created outside the block
            -could use var instead of let when naming double, and you'd have access to double outside the block it's in.
            -const can't be reassigned, and neither can be re-declared, can change or mutate let, but they are block scoped
            -var you can do whatever with. it is not block scoped.
            */
        //LEXICAL SCOPE
            //when we have nested functions, they are lexically bound, meaning they are bound to the scope of their parent or outer function, but parents' don't have access to the scope of their children
            /*
            function outer() {
                let movie = 'Amadeus';

                function inner() {

                    let movie = 'The Shining';

                    function extraInner() {

                        console.log(movie.toUpperCase());

                    }

                    extraInner();

                };

                inner();
            };
            outer();
            //logs THE SHINING
            */
    //FUNCTION EXPRESSIONS
        //function stored in a variable
            //can do this because functions are objects
            //can do a console.dir(), and it will print out the object form of the function expression

            /*

            //anonymous function expression
            const sum = function(x, y) {
                return x + y;
            }

            //named function expression -but you'd still call it via variable declaration
            const product = function multiplu(x, y) {
                return x * y;
            };

             */
    //HIGHER ORDER FUNCTIONS
        //Functions are Objects
            /*
            function add(x, y) {
                return x + y;
            };

            const subtract = function(x, y) {
                return x - y;
            };

            function multiply(x, y) {
                return x * y;
            };

            const divide = function(x, y) {
                return x / y;
            };

            const operations = [add, subtract, multiply, divide];
            console.log(operations[1](100, 4));
            for(let func of operations) {
                let result = func(30, 5);
                console.log(result);
            };
            **this is a method!!!**
            const thing = {
                doSomething: multiply
            };
            console.log(thing.doSomething(50, 2));
            -FUNCTIONS ARE SIMPLY VALUES IN JAVASCRIPT, WE CAN STORE THEM IN AN ARRAY, CALL THEM DYNAMICALLY, PUT THEM IN VARIABLES THROUGH LOOPS, THEY ARE JUST PLACEHOLDER NAMES, CAN PUT THEM IN OBJECTS, CAN USE FUNCTIONS IN FUNCTIONS
            */
    //HIGHER ORDER FUNCTIONS
        //Functions that operate on/with other functions. They can:
            //1 Accept other functions as arguments
            //2 Return a function
                //Function accepting other function as argument
                /* 
                function callThreeTimes(func) {
                    func();
                    func();
                    func();
                }

                function cry() {
                console.log('Bohoo, I am so sad!');
                };

                function repeatNTimes(action, num) {
                    for(let i = 0; i < num; i++) {
                    action();
                }
            }
                // repeatNTimes(cry, 13);
                function pickOne(f1, f2) {
                    let rand = Math.floor(Math.random() * 2) + 1;
                    if(rand < 2) {
                        f1();
                        } else {
                        f2();
                    }
                }
                callThreeTimes(cry);
                */
                //Returning Functions (think function factory)
                /* 
                function multiplyBy(num) {
                    return function(x) {
                        return x * num;
                    }
                }
                const triple = multiplyBy(3);
                console.log(triple(5));
                const double = multiplyBy(2);
                console.log(double(100));
                -functions are values that can be passed around
                -can think of all this as making factory functions
                -------------------------------------
                function makeBetweenFunc(x, y) {
                    return function(num) {
                    if(num >= x && num <= y) {
                    return true;
                }
                return false;
            }
        };
        const isChild = makeBetweenFunc(0, 18);
        console.log(isChild(17));
        console.log(isChild(37));
        const isNineties = makeBetweenFunc(1990, 2000);
        console.log(isNineties(1995));
        const isNiceWeather = makeBetweenFunc(60, 79);
        console.log(isNiceWeather(80));
                */
    //CALLBACKS
        //a callback function is a function passed into another function as an argument, which is then invoked inside the other function
        /* 
        function grumpus() {
        alert('Go Away!');
        }
        const btn = document.querySelector('button');
        btn.addEventListener('click', function(){
        alert('Why did you click me?');
        });
        */
    //HOISTING
        //When javascript is interpreting code, it HOISTS up var declarations. Does not move them, or reorganize your code, but it does HOIST them to the top. Make sure you are always declaring and initializing your variables before using them.
        //let and const declarations are not hoisted
        //function declarations are hoisted!
        //function expressions aren't hoisted, exactly. Javascript knows there's a variable, just doesn't know the value. Spits back undefined!
        /* 
        function howl() {
            console.log('Awhooooooooo');
        };

        howl();

        var hoot = function() {
            console.log('HOOOOOOO HOOOOOOOO');
        }
        hoot();
        */
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//7-14-20
    //ARRAY CALLBACK METHODS
        //outer function calls your argument function(daCallbak)
        //methods that expect you to pass a function in
        //arrays come with many built-in methods that accept callback functions
        //run a function once per every element in an array is main goal
        //GOALS
            //Use the new arrow function syntax
            //understand the following
                //forEach
                    //accepts a callback, calls the function once FOR EACH element in the array
                    //array.forEach(function(el){
                        //do something
                    //})
                    /* 
                    const books = [{
    title: 'Fight Club',
    author: ['Chuck Palahniuk'],
    rating: 5
},
{
    title: 'Women In Love',
    author: ['DH Lawrence'],
    rating: 5
},
{
    title: 'Cherry',
    author: ['Nico Walker'],
    rating: 4.5
},
{
    title: 'IT',
    author: ['Stepehen King'],
    rating: 4.5
}
];

books.forEach(function(book){
    console.log(book.title.toLowerCase());
});

for(let book of books) {
    console.log(book.title);
};

for(let i = 0; i < books.length; i++){
    console.log(books[i].title.toUpperCase());
};

books.forEach(function(book, idx){
    console.log(idx, book.title);
})
                    */
                //map
                    //creates a new array with the results of calling a callback on every element in the array
                    //good for extracting portions of an array or generating a new one with new rules
                    //MUST RETURN A VALUE
                    //array.map(function(cb){
                        //doSomething;
                    //})
                    /* 
                    const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];
const doubles = numbers.map(function(num){
    return num * 2;
});
console.log(doubles);
const evenOrOdd = numbers.map(function(num){
    return {
        value: num,
        isEven: num % 2 === 0
    }
});
console.log(evenOrOdd);
const newWords = words.map(function(word){
    return word.toUpperCase().split('').join('.');
});
console.log(newWords);

const books = [{
    title: 'Fight Club',
    author: ['Chuck Palahniuk'],
    rating: 5
},
{
    title: 'Women In Love',
    author: ['DH Lawrence'],
    rating: 5
},
{
    title: 'Cherry',
    author: ['Nico Walker'],
    rating: 4.5
},
{
    title: 'IT',
    author: ['Stepehen King'],
    rating: 4.5
}
];
const bookTitles = books.map(function(book){
    return `Title: ${book.title}`;
});
console.log(bookTitles);
                    */
////////////////////////////////////////////////////////////////////////////

//ARROW FUNCTIONS
    //syntactically compact alternative to regular function expression!!!
    //if you ONLY have one parameter, you can leave the parenthesis off
    //no parameters means use empty parenthesis

    /* 
    const square = function(num) {
    return x * x;
}

const square = (num) => {
    return x * x;
}

const isEven = (num) => {
    return num % 2 === 0;
}

const multiply = (x, y) => {
    return x * y;
}

const isOdd = num => {
    return num % 3 === 0;
}

const greet = () => {
    console.log('Hiyah!');
}
greet();
    */

    //IMPLICIT RETURNS IN ARROW FUNCTIONS
        // const square = n => (
            //     n * n
        //     )
    //const square = n => n * n;
    //console.log(square(4));

    /*
const nums = [1, 2, 3, 4, 5, 6, 7, 8];


const doubles1 = nums.map(n => n * 2);
//above works because we are working with only one expression
console.log(doubles1);

const numTypes = nums.map((n) => (
    n % 2 === 0 ? 'even' : 'odd'
));
console.log(numTypes);
    */

////////////////////////////////////////////////////////////////////////////
                //filter
                    //Creates a new array with all elements that pass the function test implemented by the provided function
                    //creates a copy with specific, targeted information
                    /*
                    const nums = [34, 35, 67, 54, 109, 102, 32, 9];
const odds = nums.filter(n => n % 2 === 1);
console.log(odds);
const bigNums = nums.filter(n => n > 50);
console.log(bigNums);
const lilNums = nums.filter(n => (n < 50))
console.log(lilNums);
const books = [{
    title: 'Fight Club',
    author: ['Chuck Palahniuk'],
    rating: 5
},
{
    title: 'Women In Love',
    author: ['DH Lawrence'],
    rating: 5
},
{
    title: 'Cherry',
    author: ['Nico Walker'],
    rating: 4.5
},
{
    title: 'IT',
    author: ['Stepehen King'],
    rating: 4.5
}
];
const goodBooks = books.filter(book => book.rating > 4.5);
const query = books.filter(book => book.title.includes('IT'));
console.log(query);
                    */
                //find
                    //returns the value of the FIRST ELEMENT in the array that satisfies the provided testing function
                    //array.find(element => {
                        //doSomething
                    //})
                    /* 
                    let movies = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
];
const film = movies.find(movie => {
   return movie.includes('Mrs.');
})
console.log(film);

const books = [{
    title: 'Fight Club',
    author: ['Chuck Palahniuk'],
    rating: 5
},
{
    title: 'Women In Love',
    author: ['DH Lawrence'],
    rating: 5
},
{
    title: 'Cherry',
    author: ['Nico Walker'],
    rating: 4.5
},
{
    title: 'IT',
    author: ['Stepehen King'],
    rating: 4.5
}
];
const cherryBook = books.filter(cherry => {
    return cherry.title === 'Cherry';
})
console.log(cherryBook);

                    */
                //reduce
                    //Executes a reducer function on each element of the array, RESULTING IN A SINGLE VALUE
                    //takes an array of values and reduces them down to a single value
                    //array.reduce((total, currentValue) => {return total + currentValue});
                    //accumaltor stores end value of reduce, currentValue represents each item in array
//accumulator starts as first value in array, currentValue starts as second item in the array
//can use reduce to find maximum value
                    /*
                    const nums = [3, 4, 5, 6, 7];
const tPlied = nums.reduce((total, current) =>{
    return total * current;
}, can put a starting value here);
console.log(tPlied);
-------------------------------------------------------------------------
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64, 107];
// let highGrade = grades.reduce((high, current) => {
//     if(current > high) return current;
//     return high; 
// })
let highGrade = grades.reduce((high, current) => current > high ? current : high);
console.log(highGrade);
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];
// let result = votes.reduce((tally, val) => {
//     if(tally[val]) {
//         tally[val]++
//     } else {
//         tally[val] = 1;
//     }
//     return tally;
// }, {})
let result = votes.reduce((tally, val) =>{
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {})
console.log(result);

                    */
                //some
                    //similar to every, but returns true if JUST ONE of the array elements pass the test function
                    /* 
const words = ['dog', 'dig', 'log', 'bag', 'wag'];
const startsD = words.some(word => console.log(word[0]));
console.log(startsD);
const books = [{
    title: 'Fight Club',
    author: ['Chuck Palahniuk'],
    rating: 5
},
{
    title: 'Women In Love',
    author: ['DH Lawrence'],
    rating: 5
},
{
    title: 'Cherry',
    author: ['Nico Walker'],
    rating: 4.5
},
{
    title: 'IT',
    author: ['Stepehen King'],
    rating: 4.5
}
];
const aboveFour = books.every(book => book.rating > 4);
console.log(aboveFour);
                    */
                //every
                    //tests whether ALL elements in the array pass the provided function, returns a BOOLEAN value, true if ALL, false if ANY
                    /*
                    const words = ['dog', 'dig', 'log', 'bag', 'waggy'];
const threeLetters = words.every(word => {
    return word.length === 3;
});
console.log(threeLetters);
const endInG = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g';
})
console.log(endInG);
                    */
                //sort
                    //arr.sort(compareFunc(a, b))
                     //if compareFunc(a, b) returns less than zero --> Sort a before b
                     //if compareFunc(a, b) returns zero --> leave a+b unchanged with respect to each other
                     //if compareFunc(a, b) returns greater than zero --> Sort b before a
                     /*
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
let loSorted = prices.slice().sort((a, b) => a - b);
let hiSorted = prices.slice().sort((a, b) => b - a);
console.log(loSorted);
console.log(hiSorted);
//keep in mind that you aren't making new arrays, you are mutating them, so trying to do two things in succession does not always work, a preslice before allows you to do this
const books = [{
    title: 'Fight Club',
    author: ['Chuck Palahniuk'],
    rating: 5
},
{
    title: 'Women In Love',
    author: ['DH Lawrence'],
    rating: 5
},
{
    title: 'Cherry',
    author: ['Nico Walker'],
    rating: 4.5
},
{
    title: 'IT',
    author: ['Stepehen King'],
    rating: 4.5
}
];
const sortedBooks = books.sort((a, b) => b.rating - a.rating);
console.log(sortedBooks);
7/15/2020
                     */
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//7-16-2020
    //OTHER USEFUL THINGS
    //GOALS
        //Work with rest and spread
            //Rest! it looks like spread, but isn't. Same three dots, almost like opposite of spread, instead of spreading data out into args, arrays and objects, it collects them down into a single array
                //Arguments Object
                    //available inside every function
                    //it's an array-like object 
                        //has a length property
                        //does NOT have array methods like push/pop
                        //contains ALL the arguments passed into the function
                        //have to turn it into an array if you want array methods
                        //NOT available inside arrow functions
                        // function sum() {
//     const argsArr = [...arguments];
//     return argsArr.reduce((total, currVal) => {
//         return total + currVal
//     })
// }
// let test = console.log(sum(1, 2, 3));
// function fullName(first, last) {
//     console.log(arguments);
//     console.log(`First: ${first}`);
// }
// fullName('tim', 'jones', 'III', 'Order of Phoenix');
                //NEW REST SYNTAX
                    //same ellipsis; you put it into a functions args
                    //collects all remaining objects into an actual array
            //Spread syntax allows an iterable such as an array to be expanded in places where zero or more args (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected--EXPANDING SOME LITERAL TO SOME OTHER PLACE OR DESTINATION
            // function sum(...nums) {
    // console.log(nums);
//     return nums.reduce((total, currVal) => total + currVal);
// };
// console.log(sum(4, 5, 6, 7));
//use it to collect all remaining args that have not been matched with a parameter
// function fullName(first, last, ...titles){
//     console.log('first', first);
//     console.log('last', last);
//     console.log('titles', titles);
// }
//can't use multiple rests within one function's args, again, order matters, has to be the last parameter, can use in an arrow function
// const mult = (...nums) => (nums.reduce((total, currentVal) => total * currentVal));
// let exOne = mult(2, 3, 4);
// console.log(exOne);
                //For Function Calls
                    //expands an iterable (array, string, etc) into a list of arguments
                    // const nums = [23, 45, 333, 43, 567, 122, 678, 2, 45, 6];
// let test = Math.max(...nums);
// //the '...' is your spread, it SPREADS the array into individual arguments
// console.log(test);
// function giveMeFour(a, b, c, d) {
//     console.log('a', a);
//     console.log('b', b);
//     console.log('c', c);
//     console.log('d', d);
// }
// const colors = ['red', 'orange', 'yellow', 'green'];
// giveMeFour(4,5,6,7);
// giveMeFour(colors);
// giveMeFour(...colors);
                //For Array Literals
                    // const cephalopods = ['dumbo octopus', 'humbolt squid', 'flamboyant cuttlefish'];
// const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
// const cnidaria = ['fire coral', 'moon jelly'];

//both cephalopods and gastropods are mollusks, making a new array with both of them called mollusca is shown below
// const mollusca = [...cephalopods, ...gastropods];
//to add something to the array
// const mollusca = ['rock shrimp',...cephalopods, ...gastropods]
// console.log(mollusca);
//one of the best uses is just simply copying an array
// const cephCopy = [...cephalopods];
// console.log(cephCopy);
//spreading other types of data into an array
//split is old way
// let exOne = 'abcdef'.split('');
// let exTwo = [...'abcdef'];
// console.log(exOne);
// console.log(exTwo);
            //For Object Literals
                //copies properties from one object into another object literal
                // const feline = {
//     legs: 4,
//     family: 'Felidae'
// };

// const canine = {
//     legs: 4,
//     family: 'Caninae'
// };

// const dog = {
//     ...canine,
//     isPet: true,
//     adorable: true
// };

// const houseCat = {
//     ...feline,
//     isGrumpy: true,
//     personality: 'unpredictable'
// };

// const tripod = {
//     ...canine,
//     legs: 3
// };
//this above is the order if you want to change any properties from the spread, putting the 'custom' property before the spread will make it get overwritten
//can clone objects but it only goes one level deep, can't clone nested properies, like with spreading arrays...nested stuff is undoable!!
//can spread objects into other objects, but can't spread an object into an array. Yet CAN spread an array into an object, it makes the key the index. Can also use spreads and objects so long as you are within an array
// console.log(dog);
// console.log(houseCat);
        //Add default function parameters
            //// function multiply(x, y) {
//     return x * y;
// }
// //no y parameter leads to undefined
// function multiply(x, y) {
//     // if(typeof y === 'undefined') {
//     //     y = 1;
//     // }
//     // y = typeof y === 'undefined' ? 1 : y;
//     //two old ways above, new way below
//     return x * y;
// }

// function multiply(x, y = 1) {
//     return x * y;
// }

// const greet = (person, greeting = 'Hiyah!') => {
//     console.log(`${greeting}, ${person}!`);
// }
// greet('Tim');
// const blah = (x, y=[1,2,3]) => {
//     console.log(x, y);
// }
// blah(2);
//just remember your order matters, can't have defaults and non defaults that don't sync up. Keep default parameters at the end
        //Understand destructuring
            //A short, clean syntax to 'unpack':
                //Values from arrays
                //Properties from objects
            //...into distinct variables
                //Array Destructuring -unpack specific values out of that array into new variables
                // const raceResults = [
//     'Eliud Kipchoge',
//     'Feyisa Lelisa',
//     'Galen Rupp',
//     'Ghirmay Ghebreslassie',
//     'Alphonce Simbu',
//     'Jared Ward'
// ];

// const [gold, silver, bronze] = raceResults;
// const [first] = raceResults;
// const [, , , fourth] = raceResults;
// const [winner, ...others] = raceResults;
//this will go into race results, and use the order to set the variables here in this array to the original array itself, with three new variables for the first three things in the array
// console.log(winner);
// console.log(others);
//come up with variables, assign them to the array you want to unpack, mind your indices
                //Object Destructuring
                    //can unpack values from an object into standalone variables, difference being that in arrays you unpack via index, but in objects you base it off the name of the property
                    // const runner = {
//     first: 'Eliud',
//     last: 'Kipchoge',
//     country: 'Kenya',
//     title: 'Elder of the Order of the Golden Heart of Kenya'
// };

// const {first, last} = runner;
// const {country: nation, title: honorific} = runner;
// console.log(first, last, nation, honorific);
//variables must be existing key names within object
//can use rest operator like with arrays"
// const {first, last, ...other} = runner;
// console.log(other);
//rather than position, property name
                    //Nested Destructuring
                        //// const results = [{
//     first: 'Eliud',
//     last: 'Kipchoge',
//     country: 'Kenya'
// },
// {
//     first: 'Feyisa',
//     last: 'Lilesa',
//     country: 'Ethiopia'
// },
// {
//     first: 'Galen',
//     last: 'Rupp',
//     country: 'United States'
// }
// ];
//country of second place
// const [,{country}] = results;
// console.log(country);
//firstName of winner of first place, country of second place, lastName of third place
// const [{first}, {country}, {last}] = results;
// console.log(first, country, last);
                //Function Parameter Destructuring
                // const runner = {
//     first: 'Eliud',
//     last: 'Kipchoge',
//     country: 'Kenya',
//     title: 'Elder of the Order of the Golden Heart of Kenya'
// };
// function print(person) {
//     const {first, last, title} = person;
//     console.log(`${first} ${last}, ${title}`);
// }
// print(runner);
// function print({first, last, title}) {
//     console.log(`${first} ${last}, ${title}`);
// };

// const response = [
//     'HTTP/1.1',
//     '200 OK',
//     'application/json'
// ]
// function parseResponse([proto, statusCode, contentType]) {
//     console.log(`Status: ${statusCode}`);
// }
// parseResponse(response);
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//7-21-2020 -- OBJECTS AND THIS!!!
    //add methods to objects
    //use new object shorthand syntax
        //Shorthand Property
        //easy way to create an object literal when you have variables
        const getStats = (arr) => {
            const max = Math.max(...arr);
            const min = Math.min(...arr);
            const sum = arr.reduce((sum, r) => sum + r);
            const avg = sum / arr.length;
        };
        const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
        const stats = getStats(review);
    //use computed properties
    //understand prototypes
    //explain how THIS works