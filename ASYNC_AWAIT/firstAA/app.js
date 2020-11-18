//ASYNC FUNCTIONS *nice syntactical sugar for working with promises
    //2 pieces to make this work
        //ASYNC
            //used in front of a function declaration/expression, to designate a certain function as an async function
                //it makes a function return a promise
            //Async functions always return a promise
            //if the function returns a value, the promise will be resolved with that value
            //if the function throws an exception, the promise will be rejected
        //AWAIT

function getData() {
    const data = axios.get('https://swapi.dev/api/planets/')
    //this then is needed to get our data
    .then((data) => {
        console.log(data);
    })
    //this on its own does not work
    console.log(data);
};

getData();