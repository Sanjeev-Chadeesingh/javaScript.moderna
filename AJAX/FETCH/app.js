// https://swapi.dev/api/planets/
//Fetch API ==> MDN has great resources
    //newer way of making requests via JS, supports promises, not supported by IE
    //fetch method grabs a url
        //returns a promise, which can either be resolved or rejected
            //resolved promise value is a response object
            //can catch rejected promise no problemSZ

fetch('https://swapi.dev/api/planetss')
//the res in here is a response object
.then((res) => {
    //content of this response is a readablestream, which is a way of accessing large data, with the ability to process as we go / response.json() => takes a readable stream to completion
        //will return the response even with a 404, no rejection! resolves normally and only rejects on network failure
    console.log(res);
    //this returns a promise, another then() needed, resolve it with the read and parsed data from the readable stream, once its resolved you have access to the data

    //can solve the problem of error catching with a check on the response here
    if(!res.ok)
    //  {
        // console.log('ERROR!');
        //another way here is to throw an error
        throw new Error(`Status Code Error: ${res.status}`);
    // } else {
        //and make the else to run the code
        res.json().then((data) => {
            console.log(data);
            for(let planet of data.results) {
                console.log(planet.name);
            }
        });
    // }


  
})
.catch((error) => {
    console.log('SOMETHING WENT WRONG')
    console.log(error);
})