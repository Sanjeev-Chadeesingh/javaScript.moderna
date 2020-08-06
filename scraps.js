// const letters = 'abcdefghijklmnopqrstuvwxyz';
function isPangram(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < alpha.length; i++) {
      if(str.indexOf(alpha[i]) === -1) {
          return 'Pangram!';
      } 
    }
    return 'Not';
};
let exOne = 'This is the end';
let exTwo = 'The quick brown fox jumps over the lazy dog';
let exThree = 'Two driven jocks help fax my big quiz';
let exFour = 'The end is near';
console.log(isPangram(exOne));
console.log(isPangram(exTwo));
console.log(isPangram(exThree));
console.log(isPangram(exFour));

// isPangram(exOne);
// isPangram(exTwo);
// isPangram(exThree);
// isPangram(exFour);