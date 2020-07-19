console.log('Functions in detal!!');
    //HIGHER ORDER FUNCTIONS
        //Functions are Objects
            /*
            function add(x, y) {
                return x + y;
            };

            const subtract = function(x, y) {
                return x - y;
            };

            function multiply(x, y) {
                return x * y;
            };

            const divide = function(x, y) {
                return x / y;
            };

            const operations = [add, subtract, multiply, divide];
            console.log(operations[1](100, 4));
            for(let func of operations) {
                let result = func(30, 5);
                console.log(result);
            };
            **this is a method!!!**
            const thing = {
                doSomething: multiply
            };
            console.log(thing.doSomething(50, 2));
            -FUNCTIONS ARE SIMPLY VALUES IN JAVASCRIPT, WE CAN STORE THEM IN AN ARRAY, CALL THEM DYNAMICALLY, PUT THEM IN VARIABLES THROUGH LOOPS, THEY ARE JUST PLACEHOLDER NAMES, CAN PUT THEM IN OBJECTS, CAN USE FUNCTIONS IN FUNCTIONS
            */
    //HIGHER ORDER FUNCTIONS
        //Functions that operate on/with other functions. They can:
            //1 Accept other functions as arguments
            //2 Return a function
                //Function accepting other function as argument
                /* 
                function callThreeTimes(func) {
                    func();
                    func();
                    func();
                }

                function cry() {
                console.log('Bohoo, I am so sad!');
                };

                function repeatNTimes(action, num) {
                    for(let i = 0; i < num; i++) {
                    action();
                }
            }
                // repeatNTimes(cry, 13);
                function pickOne(f1, f2) {
                    let rand = Math.floor(Math.random() * 2) + 1;
                    if(rand < 2) {
                        f1();
                        } else {
                        f2();
                    }
                }
                callThreeTimes(cry);
                */
                //Returning Functions (think function factory)
                /* 
                function multiplyBy(num) {
                    return function(x) {
                        return x * num;
                    }
                }
                const triple = multiplyBy(3);
                console.log(triple(5));
                const double = multiplyBy(2);
                console.log(double(100));
                -functions are values that can be passed around
                -can think of all this as making factory functions
                -------------------------------------
                function makeBetweenFunc(x, y) {
                    return function(num) {
                    if(num >= x && num <= y) {
                    return true;
                }
                return false;
            }
        };
        const isChild = makeBetweenFunc(0, 18);
        console.log(isChild(17));
        console.log(isChild(37));
        const isNineties = makeBetweenFunc(1990, 2000);
        console.log(isNineties(1995));
        const isNiceWeather = makeBetweenFunc(60, 79);
        console.log(isNiceWeather(80));
                */
    //CALLBACKS
        //a callback function is a function passed into another function as an argument, which is then invoked inside the other function
        /* 
        function grumpus() {
        alert('Go Away!');
        }
        const btn = document.querySelector('button');
        btn.addEventListener('click', function(){
        alert('Why did you click me?');
        });
        */
    //HOISTING
        //When javascript is interpreting code, it HOISTS up var declarations. Does not move them, or reorganize your code, but it does HOIST them to the top. Make sure you are always declaring and initializing your variables before using them.
        //let and const declarations are not hoisted
        //function declarations are hoisted!
        //function expressions aren't hoisted, exactly. Javascript knows there's a variable, just doesn't know the value. Spits back undefined!
        /* 
        function howl() {
            console.log('Awhooooooooo');
        };

        howl();

        var hoot = function() {
            console.log('HOOOOOOO HOOOOOOOO');
        }
        hoot();
        */