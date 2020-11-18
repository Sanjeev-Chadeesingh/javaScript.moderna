//ASYNC AWAIT EXPLAINED
//ASYNC FUNCTIONS *nice syntactical sugar for working with promises
    //2 pieces to make this work
        //ASYNC
            //used in front of a function declaration/expression, to designate a certain function as an async function
                //it makes a function's return value a promise
function greet() {
    return 'HELLO';
};
//promise returned from this async greeter is resolved with the value of the return
async function greeter() {
    return 'HELLO';
};

// greeter().then((val) => {
//     console.log('Promise resolved with ', val);
// });

// async function add(x, y) {
//     if(typeof x !== 'number' || typeof y !== 'number') {
//         throw 'X and Y must be numbers';
//     }
//     return x + y;
// };

// add('e', 'r')
// .then((val) => {
//     console.log('PROMISE RESOLVED WITH: ', val);
// })
// .catch((err) => {
//     console.log('PROMISE REJECTED WITH', err);
// });

        //AWAIT
            //we can only use the await keyword inside of functions declared with async
            //await will pause the execution of the function, waiting for a promise to be resolved
            async function getPlanets() {
                //this is the value the promise is resolved with, saved in a variable
                    //JS waits for this promise to be resolved
                const res = await axios.get('https://swapi.dev/api/planets/');
                console.log(res);
                console.log(res.data);
            };
            //this is one way of error handling, with the catch callBack
            getPlanets().catch((err) => {
                console.log(`Error in Catch: ${err}`)
            });

    //ERROR HANDLING WITH ASYNC AWAIT
        //other way is a 'try and catch block'
        async function getCharacters() {
            //this is telling it what to do if error free
            try {
                const res = await axios.get('https://swapi.dev/api/people/');
                // console.log(res);
                console.log(res.data);
            //here, if an error is raised, run this!
            } catch(error) {
                console.log(`In Catch: ${error}`);
            }
          
        };
        console.log('================');
        getCharacters();