//QUERY STRINGS AND HEADERS

//can mess with the api call's query string to look with specificity
    //typically get a good understanding of what you can mes with via the docs

//can use the params field in postman to add/edit headers' key value pairs

//  :query => variable! => the colon before it

//HEADERS IN AXIOS
const jokes = document.querySelector('#jokes');

const btn = document.querySelector('button');



const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
}



const getDadJoke = async () => {
    try {
         //here we specify, based on doc specific to the api
        const config = { headers: { Accept: 'application/json' } }
        //this config is our specified query string
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch(error) {
        return 'NO JOKES AVAILABLE, SORRY!'
    }
   

}
// getDadJoke();

btn.addEventListener('click', addNewJoke);