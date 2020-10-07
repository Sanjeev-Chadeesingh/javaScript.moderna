//8-18-2020 SPREAD FOR ARRAYS
    //can create a new array using an existing array. Spreads the elements from one array into a new array
const cephalopods = ['octopus', 'cuttlefish'];
const gastropods = ['snail', 'slug',];
const cnidaria = ['coral', 'jelly'];
const mollusca = [...cephalopods, 'garden slug', ...gastropods]; //order matters, just like spreading function args
console.log(mollusca);
const inverts = [...cephalopods, ...gastropods, ...cnidaria];
console.log(inverts);
const cephCopy = [...cephalopods]; //unique references, they are not === to each other
//spreading a string INTO an array
    let exOne = 'abcdefg'.split(''); //old way
    let exTwo = [...'abcdefg'];
    console.log(exOne);
    console.log(exTwo);
    