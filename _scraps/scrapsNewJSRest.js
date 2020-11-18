//8-25-2020 REST *collects things down into a single array
    //used when wanting to make functions accepting a variable number of objects (goes inside parameter list of function definition)
    //...thenName, like spread, inside parameter list of function definition
        //collects all remaining arguments into an actual array
        //instead of spreading out, collects things down into a single array
        //seems to work well with reduce
        //order matters, like spread--rest parameter must be the last formal parameter
        //spread takes single element and breaks it up into multiple pieces, rest takes multiple args and COMBINES THEM INTO A SINGLE ARRAY
function sum(...args) {
    return args.reduce((sum, cV) => {
        return sum + cV;
    })
}
console.log(sum(4, 5, 6, 7));

function fullName(first, last, ...titles) {
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}

const multiply = (...nums) => (
    nums.reduce((sum, cV) => sum * cV)
)
let exOne = multiply(2, 3, 4);
console.log(exOne);
let exTwo = [...'yezzir'];
console.log(exTwo);