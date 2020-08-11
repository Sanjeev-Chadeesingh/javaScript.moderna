// 8-7-2020 Functions!
    //return allows you to return a value, storable in a variable
    //the return statement ends function execution AND specifies the value to be returned by that function. return tells javascript to move on.
    //a return can stop a function no matter where it is in the function
function grumpus() {
    console.log('Ugh leave me alone!');
    console.log('Still here?!?!?!');
    console.log('Last time I will tell ya to leave!');
};
grumpus();

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
};
rollDie();

function throwDice(numRolls) {
    for(let i = 0; i < numRolls; i++) {
        rollDie();
    }
};
throwDice(5);

function greet(nickname) {
    console.log(`Hi, ${nickname}`);
};
greet('Jeeves');

function square(num) {
    console.log(num * num);
};

function sum(x, y) {
    return 4 + 5;
};
let exOne = sum(4, 5);
console.log(`exOne: ${exOne}`);

function divide(a, b) {
    console.log(a / b);
};
divide(1, 4);

function containsPurple(arr) {
    for(let color of arr) {
        if(color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    //return false here, so the loop can run itself through the array
    return false;
}
