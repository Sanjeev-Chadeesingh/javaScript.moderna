console.log(`LET's AXIOS, SHALL WE?`);

// axios.get('https://swapi.dev/api/people/')
// .then(({data}) => {
//     console.log(data);
//     console.log(data.results);
//     data.results.forEach((character, index) => {
//         console.log(`${index}) ${character.name}`);
//     })
//     const nextURL = data.next;
//     return axios.get(nextURL);
// })
// .then(({data}) => {
//     console.log(data);
//     console.log(data.results);
//     data.results.forEach((character, index) => {
//     console.log(`${index}) ${character.name}`);
//     })    
// })
// .catch((err) => {
//     console.log(err);
// })

//https://developer.nps.gov/api/v1/parks?&api_key=RWsguX4orfDsVSGEqeLVa6Y3UUiQpwdLd5BXcN7C

axios.get('https://developer.nps.gov/api/v1/parks?limit=497?&api_key=RWsguX4orfDsVSGEqeLVa6Y3UUiQpwdLd5BXcN7C')
.then((res) => {
    console.log(res.data);
})
.catch((err) => console.log(err));