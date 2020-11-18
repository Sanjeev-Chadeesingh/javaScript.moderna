//AXIOS
//3rd party library that uses fetch behind the scenes to make HTTP requests
    //include in HTML file as external script
        //use the unpackage
    //Parses the response into JSON for you
    //Error handling is choice!
axios.get('https://swapi.dev/api/planets/')
.then((res) => {
    console.log(res.data);
})
//all you need for error handling!!!
.catch((err) => {
    console.log(err);
})