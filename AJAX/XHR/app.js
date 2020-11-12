console.log('Hiyah There!');

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
    console.log('It worked!');
    const data = JSON.parse(this.responseText);
    // for(let planet of data.results) {
    //     console.log(planet.name);
    // }
    const filmURL = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function() {
        console.log(`Second Request Worked`);
        const filmData = JSON.parse(this.responseText);
        console.log(filmData);
    })
    filmReq.addEventListener('error', function(e) {
        console.log('ERROR');
        console.log(e);
    })
    filmReq.open('GET', filmURL);
    filmReq.send();
});
firstReq.addEventListener('error', () => {
    console.log('It didn\'t work!');
});
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent')