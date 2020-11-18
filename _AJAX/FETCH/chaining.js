//CHAINING REQUESTS
fetch('https://swapi.dev/api/planets')
.then((res) => {
    if(!res.ok)
    throw new Error(`ERROR CODE: ${res.status}`);
    return res.json()
})
.then((data) => {
    console.log('FETCHED FIRST TEN PLANETS')
    for(let planet of data.results) {
        console.log(planet.name);
    };
    const nextURL = data.next;
    return fetch(nextURL);
})
.then((res) => {
    if(!res.ok)
    throw new Error(`ERROR CODE: ${res.status}`);
    return res.json()   
})
.then((res) => {
    console.log('FETCHED NEXT TEN PLANETS');
    for(let planet of res.results) {
        console.log(planet.name);
    };
})
.catch((error) => {
    console.log('FETCH ISSUE');
    console.log(error);
})
