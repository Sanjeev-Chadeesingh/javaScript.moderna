// https://swapi.dev/api/planetss/


// fetch('https://swapi.dev/api/planets/')
// .then((res) => {
//     if(!res.ok)
//        throw new Error(`Status Error: ${res.status}`); 
//        return res.json();
// })
// .then((data) => {
//     console.log(`FETCHED FIRST TEN PLANETS`);
//     for(let planet of data.results) {
//         console.log(planet.name);
//     }
//     const nextURL = data.next;    
//     return fetch(nextURL);
// })
// .then((res) => {
//     if(!res.ok)
//         throw new Error(`Status Error: ${res.status}`);
//         return res.json();
// })
// .then((data) => {
//     console.log(`FETCHED NEXT TEN PLANETS`);
//     for(let planet of data.results) {
//         console.log(planet.name);
//     }
// })
// .catch((err) => {
//     console.log('ERROR');
//     console.log(err);
// })

fetch('https://swapi.dev/api/planets/')
.then((res) => {
    if(!res.ok)
       throw new Error(`Status Error: ${res.status}`); 
       return res.json();
})
.then((data) => {
    console.log(`FETCHED FIRST TEN PLANETS`);
    for(let planet of data.results) {
        console.log(planet.name);
    }
    const nextURL = data.next;    
    return fetch(nextURL);
})
.then((res) => {
    if(!res.ok)
        throw new Error(`Status Error: ${res.status}`);
        return res.json();
})
.then((data) => {
    console.log(`FETCHED NEXT TEN PLANETS`);
    for(let planet of data.results) {
        console.log(planet.name);
    }
})
.catch((err) => {
    console.log('ERROR');
    console.log(err);
})
