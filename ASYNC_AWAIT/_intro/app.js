//ASYNC + AWAIT
function getData() {
    //this only logs a pending promise
        //cannot run synchronously
    //axios.get returned a promise and we logged the promise, but there's no access to it without a .then() waiting on it to do something with the resolved value
    const data = axios.get('https://swapi.dev/api/planets/');
    console.log(data);
};
getData();

//ASNYC
    //Async functions always return a promise
    //If the function returns a value, the promise will be resolved with that value
    //If the function throws an exception, the promise will be rejected

    function greet() {
        return 'Hello!';
    }

    //this is resolved with 'Hello'
    async function greet1() {
        return 'Hello!';
    }
    //val here is hello, the returned promise
    greet1().then((val) => {
        console.log(`PROMISE RESOLVED WITH: ${val}`);
        console.log('==========================');
    });

   

    // async function add(x, y) {
    //     if(typeof x !== 'number' || typeof y !== 'number') {
    //         throw 'X and Y must be numbers';
    //     }
    //     return x + y;
    // };
    // add(5, 'e').then((val) => {
    //     console.log(`PROMISE RESOLVED WITH: ${val}`);
    // })
    // .catch((err) => {
    //     //the catch is from the throw above!
    //     console.log(`PROMISE REJECTED WITH: ${err}`);
    // })

    function add(x, y) {
        return new Promise((resolve, reject) => {
            if(typeof x !== 'number' || typeof y !== 'number') {
                reject('X AND Y MUST BE NUMBERS!');
            } else {
                resolve(x + y);
            }
        })
    };

    add(4, 16).then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

    add('e', false).then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

    //AWAIT
        //we can only use the await keyword inside of a function declared with async
        //await will pause the execution of the function, waiting for the promise to be resolved
    // function getPlanets() {
    //    return axios.get('https://swapi.dev/api/planets/')
    // };

    // getPlanets().then((res) => {
    //     console.log(res.data);
    // })
   async function getPlanets() {
       //await makes javascript WAIT on the response, no .then() needed
       //the await is stored and logged after, in order
       const res = await axios.get('https://swapi.dev/api/planets/');
       console.log(res.data);
   }
   getPlanets();

   async function getPeople() {
    try {
        const res = await axios.get('https://swapi.dev/api/people/');
        console.log(res.data);
    } catch(error) {
        console.log(`In catch: ${error}`)
    }
};
getPeople();