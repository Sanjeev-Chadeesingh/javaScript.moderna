//8-10-2020 HIGHER ORDER FUNCTIONS CONTINUED
    //Functions that operate on or with other functions
        //accept other functions as arguments
        function callThrice(func) {
            func();
            func();
            func();
        };
        function cry() {
            console.log('BOOHOO I\'m so sad');
        }
        function rage() {
            console.log('I hate everything!');
        }
        // callThrice(cry);
        // callThrice(rage);
        function caller(funcOne, funcTwo) {
            let call = Math.floor(Math.random() * 2);
            if(call === 0) {
                return funcOne();
            } else {
                return funcTwo();
            }
        }
        // caller(cry, rage);
        function repeatNTimes(func, num) {
            for(let i = 0; i < num; i++) {
                func();
            }
        };
        // repeatNTimes(rage, 13);

        //functions as return values
        function multiplyBy(num) {
            return function(x) {
                return x * num;
            }
        }
        const triple = multiplyBy(3);
        console.log(triple(3));
        
        function makeBetween(min, max) {
            return function(num) {
                if(num >= min && num <= max) {
                    return true;
                } else {
                    return false;
                }
            }
        };
        // let isChild = makeBetween(0, 18);
        // console.log(isChild(15));
        // let isNineties = makeBetween(1990, 2000);
        // console.log(isNineties(1994));

        let isNiceWeather = makeBetween(65, 75);
        console.log(isNiceWeather(80));