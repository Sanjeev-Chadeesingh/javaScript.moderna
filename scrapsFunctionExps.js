//8-10-2020 FUNCTION EXPRESSIONS
function add(x, y) {
    return x + y;
};

const sum = function(x, y) {
    return x + y;
};
console.log(sum(5, 6));
const product = function multiply(x, y) {
    return x * y;
    //this is a named function expression
    //called as product(), not multiply()
}