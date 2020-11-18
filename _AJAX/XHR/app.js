//check out MDN on HttpRequest

//first make the object
const firstReq = new XMLHttpRequest();


//load and error function here
firstReq.addEventListener('load', () => {
    console.log('WORKED');
    //returns a non-javascript datatype (JSON)
    // console.log(firstReq.responseText);
    //this makes the datatype JS readable, let's store it in a variable
    const data = JSON.parse(firstReq.responseText);
    //log this now Javascript Object to the console
    console.log(data);
    //now that the data is a javascript object, we can run methods and loops
    // for(let planet of data.results) {
    //     console.log(planet.name);
    // }

    //chaining requests
    const filmURL = data.results[0].films[4];
    //now we have our next datatype (filmURL), let's CHAIN!
        //first we create our new object
        const filmReq = new XMLHttpRequest();
        //again we set our load and error callbacks
        filmReq.addEventListener('load', () => {
            console.log('WORKED AGAIN');
            const secondData = JSON.parse(filmReq.responseText);
            console.log(secondData);
        })
        filmReq.addEventListener('error', (e) => {
            console.log('Error' + e);
        })
        //retrieve our data here
        filmReq.open('GET', filmURL);
        filmReq.send();

});

firstReq.addEventListener('error', () => {
    console.log('error');
});


//here is the info
firstReq.open('GET', 'https://swapi.dev/api/planets');

firstReq.send();
console.log('Request Sent');