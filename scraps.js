console.log('Functions in detal!!');
//GOALS
    //understand scope
    //write higher order functions
    //pass functions as callbacks
//scope - variable visibility
    //the location where a variable is defined dictates where we have access to that variable
        //FUNCTION SCOPE
            //defined within the function:
            /*
            function lol() {
                let person = 'Tom';
            }
            person is defined within the function, and isn't accessible outside of it
            */ 
        //BLOCK SCOPE
            /*
            let radius = 8;
            if(radius > 0) {
                const PI = 3.14;
                let circ = 2 * PI * radius;
            }
            PI and circ are scoped to the block, can't do anything with them outside the block
            if(true) {
                var animal = 'eel';
            }
            console.log(animal);
            -this above WILL work, can log animal outside the block
            -let is good for forLoops, scopes the iterator to the block, var won't, access to iterator is available regardless where you are
            -let and const cannot be reused if in same block, var can
            -----------------------------
            function doubleArr(arr) {
                const result = [];
                for(let num of arr) {
                let double = num * 2;
                result.push(double);
            }
                return result;
            };
            console.log(doubleArr([1, 2, 3]));
            ------------------------------
            if had set vars instead of lets and consts, could have logged things inside and out of blocks within function and loop
            -you have access in a block to variables created outside the block
            -could use var instead of let when naming double, and you'd have access to double outside the block it's in.
            -const can't be reassigned, and neither can be re-declared, can change or mutate let, but they are block scoped
            -var you can do whatever with. it is not block scoped.
            */
        //LEXICAL SCOPE
            //when we have nested functions, they are lexically bound, meaning they are bound to the scope of their parent or outer function, but parents' don't have access to the scope of their children
            /*
            function outer() {
                let movie = 'Amadeus';

                function inner() {

                    let movie = 'The Shining';

                    function extraInner() {

                        console.log(movie.toUpperCase());

                    }

                    extraInner();

                };

                inner();
            };
            outer();
            //logs THE SHINING
            */
    //FUNCTION EXPRESSIONS
        //function stored in a variable
            //can do this because functions are objects
            //can do a console.dir(), and it will print out the object form of the function expression

            /*

            //anonymous function expression
            const sum = function(x, y) {
                return x + y;
            }

            //named function expression -but you'd still call it via variable declaration
            const product = function multiplu(x, y) {
                return x * y;
            };

             */
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