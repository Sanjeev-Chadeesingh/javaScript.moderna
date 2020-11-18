// 7-28-2020 STOCK TAKE ONE!!

//typeof operator
    //operator, just like plus sign, so no parenthesis needed.
    //typeof 'space' valueToBeCategorized
let exOne = 'stringTime';
let exTwo = 5;
let exThree = false;
let exFour = typeof exTwo;

//string methods
    //string.method(arg) => mdn on strings for methods
    let exFive = exOne.toUpperCase();
    //indexOf => where in a string a given substring occurs/ begins
    let tvShow = 'catdog';
    console.log(tvShow.indexOf('cat'));
    //slice => method that slices string at point of argument
    let exSix = 'superhero'.slice(0, 5);
    console.log(exSix);
    //replace => args are what to replace and what you replace it with string.replace(new, old);
    let exSeven = 'The end is not near.';
    let exEight = exSeven.replace('not', 'definitely not');
    console.log(exEight);
    let exNine = 'This is the way I live.';
    let exTen = 'I stack my money lay low and chill.';
    let exEleven = exNine.slice(5);
    console.log('we SLICIN');
    console.log(exEleven);

// not operator ! => !expression returns true if the expression is false
    //make a console/alert store
    // alert('Hey there, ready to not ! operate?');
    // let res = prompt('Ice cream?');
    // if(!(res === 'yes')) {
    //     alert('You ain\'t 21.');
    // } else {
    //     alert('Dis place for twenty-ones...welcome!');
    // }

//switch statement!
let day = 4;
switch(day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    default:
        console.log('Who knows.');
}
    
// ternary operator => condition ? ifTrue : ifFalse
let num = 5;
num === 7 ? console.log('Lucky!!') : console.log('Unlucky!!!');
let status = 'online';
let color = status === 'offline' ? 'red' : 'green';
console.log(color);
let age = 36;
let legallyAllowed = age >= 21 ? true : false;
console.log('ternary here');
console.log(legallyAllowed);
