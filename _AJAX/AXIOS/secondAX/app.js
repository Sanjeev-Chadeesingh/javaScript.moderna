//chaining axios requests
    //a lot easier!
// axios.get('https://swapi.dev/api/planets/')
// .then(({data}) => {
//     console.log(data);
//     for(let planet of data.results) {
//         console.log(planet.name);
//     }
//     return axios.get(data.next)
//     .then(({data}) => {
//         console.log(data);
//         for(let planet of data.results) {
//             console.log(planet.name);
//         }
//     })
// })
// .catch((err) => {
//     console.log(err);
// })

//REFACTORED
const fetchPlanets = (url = 'https://swapi.dev/api/planets/') => {
    console.log(url);
    return axios.get(url);
};

const printPlanets = ({data}) => {
    console.log(data);
    for(let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};

fetchPlanets()
.then(printPlanets)
.then(fetchPlanets)
.then(printPlanets)
.catch((err) => {
    console.log(err);
});