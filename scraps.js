let strOne = 'Hiyah there and welcome to the show!';
let strTwo = 'The quick brown fox jumps over the lazy dog.';
let strThree = 'abcdefghijklmnopqrstuvwxyz';
function isPangram(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let casedStr = str.toLowerCase();
    for(let char of alpha) {
        if(casedStr.indexOf(char) === -1) {
            return 'Not a pangram';
        }
    } 
    return 'Pangram!!';

};
let test = isPangram(strThree);
console.log(test);
// let casedStr = strOne.toLowerCase();
// console.log(casedStr);