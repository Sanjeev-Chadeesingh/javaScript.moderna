// fetch('https://swapi.dev/api/planets')
// .then((res) => {
//     if(!res.ok)
//     throw new Error(`ERROR!! : ${res.status}`);
//     console.log(`Status : ${res.status}`);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
//     for(let planet of data.results) {
//         console.log(planet.name);
//     }
//     const filmURL = data.results[0].films[0];
//     console.log('FETCHED FIRST TEN PLANETS');
//     return fetch(filmURL);
// })
// .then((res) => {
//     console.log(res);
//     if(!res.ok)
//     throw new Error(`ERROR!! : ${res.status}`);
//     console.log(`Status : ${res.status}`);
//     return res.json();
// })
// .then((data) => {
//     console.log(`Fetched first film`);
//     console.log(data.title);
// })
// .catch((error) => {
//     console.log(`ERROR!`);
//     console.log(error);
// })

// const errorHandlerAndDataParser = (res) => {
//     if(!res.ok)
//     throw new Error(`ERROR!! : ${res.status}`);
//     console.log(`Status : ${res.status}`);
//     return res.json();   
// };

// const planetFarming = (data) => {
//     console.log(`LOADING PLANETS`)
//     for(let planet of data.results) {
//         console.log(planet.name);
//     }
//     //this creates a newly resolved promise, so you can chain with it 
//         //pass in the next url     
//     return Promise.resolve(data.next);
// };

// //give it default parameters here in order to refactor code even better!!
// const nextPlanetFarming = (url = 'https://swapi.dev/api/planets') => {
//     return fetch(url);
// }

// nextPlanetFarming()
// .then(errorHandlerAndDataParser)
// .then(planetFarming)
// .then(nextPlanetFarming)
// .then(errorHandlerAndDataParser)
// .then(planetFarming)
// .catch((error) => {
//     console.log(`ERROR!`);
//     console.log(error);
// })





// fetch('https://pokeapi.co/api/v2/pokemon')
// .then((res) => {
//     if(!res.ok)
//     throw new Error(`Error: ${res.status}`);
//     console.log(`Status: ${res.status}`); 
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
//     let names;
//    for(let i = 0; i < data.results.length; i++) {
//        names = data.results[i];
//        console.log(names);
//    }
//    const next = data.next;
//    return fetch(next);
// })
// .then((res) => {
//     if(!res.ok)
//     throw new Error(`Error: ${res.status}`);
//     console.log(`Status: ${res.status}`); 
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
//     let names;
//    for(let i = 0; i < data.results.length; i++) {
//        names = data.results[i];
//        console.log(names);
//    }
// })
// .catch((error) => {
//     console.log(error);
// });

//https://developer.nps.gov/api/v1/parks&api_key=RWsguX4orfDsVSGEqeLVa6Y3UUiQpwdLd5BXcN7C
fetch('https://developer.nps.gov/api/v1/parks?limit=497?&api_key=RWsguX4orfDsVSGEqeLVa6Y3UUiQpwdLd5BXcN7C')
.then((res) => {
    if(!res.ok)
    throw new Error(`ERROR ${res.status}`);
    console.log(`Status: ${res.status}`);
    return res.json();
})
.then(({data}) => {
    console.log(data);
    data.forEach((park, index) => {
        if(park.states === 'FL') {
            console.log(park);
        }
    })
})
.catch((err) => {
    console.log(err);
})