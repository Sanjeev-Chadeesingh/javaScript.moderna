//8-28-2020 *METHODS -adding functions as properties to objects
const math = {
    add: function(x, y) {
        return x + y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    numbers: [1, 2, 3, 4, 5]
};
console.log(math.add(3, 4));

//METHOD SHORTHAND SYNTAX
const moMath = {
    subtract(x, y) {
        return x - y;
    },
    divide(x, y) {
        return x / y;
    },
    user: 'Carol',
    login() {
        console.log(`You have logged the fuck in, ${this.user}`);
    }
};
moMath.login();