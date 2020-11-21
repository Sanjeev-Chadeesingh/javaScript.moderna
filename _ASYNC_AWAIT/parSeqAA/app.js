//sequential requests
    //run in order, first then second then third
        //synchronous!!!
// async function getThreePokemon() {
//     //each request is going and returning resolved in sequence (in order, synchronous)
//         //these are waiting for the resolved value, and storing them in the variable, they are not the promises
//     //these requests aren't relying on each other
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// };

// parallel requests
// async function getThreePokemon() {
//     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// };

// getThreePokemon();

//('https://developer.nps.gov/api/v1/parks?limit=497?&api_key=RWsguX4orfDsVSGEqeLVa6Y3UUiQpwdLd5BXcN7C')

async function getFLParks() {
    const parksFL = await axios.get('https://developer.nps.gov/api/v1/parks?stateCode=fl?limit=497?&api_key=RWsguX4orfDsVSGEqeLVa6Y3UUiQpwdLd5BXcN7C');
    console.log(parksFL.data);
}

getFLParks();

//  https://swapi.dev/api/people
