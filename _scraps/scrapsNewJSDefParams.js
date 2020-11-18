//8-18-2020 DEFAULT PARAMETERS
        /*
        function multiply(x, y) {
            return x * y;
        }
        PARAMETERS
        function multiply(x, y = 1) {
            return x * y;
        }
        */
       const greet = (person, greeting = 'Hi', punctuation = '!') => {
           return (`${greeting}, ${person}${punctuation}`);
       }
       console.log(greet('Sanjeev'));
       console.log(greet('Sanjeev', 'Whatata'));
       //below is to show order is needed / parameters need to be last, just mind yourself
       console.log(greet('Sanjeev', '!'));
       const blah = (x, y = [1, 2, 3]) => {
           console.log(x, y);
       }
       blah(1);
       blah(1, 3);