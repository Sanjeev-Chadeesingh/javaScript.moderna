//8-10-2020 HIGHER ORDER FUNCTIONS
    //functions are OBJECTS
        //functions are simply values in javascript--we can store them in an array, call them dynamically, put them in variables through loops. we can put a function in an object
    function add(x, y) {
        return x + y;
    }

    const sub = function(x, y) {
        return x - y;
    };

    function multiply(x, y) {
        return x * y;
    }

    const divide = function(x, y) {
        return x / y;
    };

    const operations = [add, sub, multiply, divide];

    for(let func of operations) {
        let result = func(30, 5);
        console.log(result);
    }

    const thing = {
        doSomething: multiply
    };