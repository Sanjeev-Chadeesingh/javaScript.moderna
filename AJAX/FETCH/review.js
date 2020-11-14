//our fetch, it is returning a promise, therefore with resolve and reject callbacks, connected to then() and catch(), respectively
fetch('https://swapi.dev/api/people')

//first response here, replete with error handling
.then((res) => {
    if(!res.ok)
    throw new Error(`ERROR! ${error.status}`);
    console.log('FIRST RESPONSE');
    //log of the response
    console.log(res);
    //this returns the part of the response with our data (the body, called res here)
    //we then parse the body (the readableStream) into json data and return it
    return res.json();
})
.then((data) => {
    //this second resolution comes from the data above in line 13, now parsed into JSON
    console.log('First set of planets');
    console.log(data);
    for(let planet of data.results) {
        console.log(planet.name);
    }
    //here, we declare a variable to store a part of the now JSON made information, namely, the next page of data
    let nextURL = data.next;
    //this return is a fetch, so therefore promise-made, replete with a subsequent resolution
    return fetch(nextURL);
})
.then((res) => {
    //this response is made from the promise object above in line 25
    if(!res.ok)
    //above and below is the error handling necessary for our response
    throw new Error(`ERROR! ${error.status}`);
    console.log(`SECOND RESPONSE`);
    console.log(res);
    //here is the readable stream parsed into JSON, and returned for use in the below promise
    return res.json();
})
.then((data) => {
    //this data pull is using the returned JSON info from line 35
    console.log('Next set of planets')
    for(let planet of data.results) {
        console.log(planet.name);
    }
})
.catch((error) => {
    console.log(`ERROR!: ${error}`);
});