//  https://pokeapi.co/api/v2/pokemon/

async function getPokemon() {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        console.log(res);
    } catch(error) {
        console.log(`Unsuccessful! In catch: ${error}`);
    }
};

getPokemon();