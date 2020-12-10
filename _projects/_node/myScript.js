// const message = 'Hiyah There!';

// //this is now available to other files
// module.exports = message;

let counter = 0;

module.exports = {
    incrementCounter() {
        counter += 1;
    },
    getCounter() {
        return counter;
    }
};