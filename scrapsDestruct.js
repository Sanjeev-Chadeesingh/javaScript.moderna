// destructuring - a short, clean syntax to unpack: |Values from Arrays|Properties from objects| into distinct variables

    //destructuring arrays - unpack specific values from array into new values
     const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
    ];
    const [gold, silver, bronze] = raceResults;
    const [, , , fourth] = raceResults;
    console.log(fourth);
    // can use rest with destructuring
    const [winner, second, third, ...others] = raceResults;
    console.log(others);

    console.log('----------------------------');

    //destructuring objects - variables names must be existing keyNames of object
    const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
    };
    const {first, last} = runner;
    console.log(first, last);
    //renaming variables
    const {country: nation, title: honorific} = runner;
    console.log(nation, honorific);
    // can use rest here
    const {first, last, ...other} = runner;
    console.log(other);

    console.log('-----------------------------');

    //nested destructuring
    const results = [{
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
    },
    {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
    },
    {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
    }
    ];
    // change 'first' to 'goldWinner' of first runner, fetch country of second runner
    const [{first: goldWinner}, {country}] = results;

    console.log('-------------------------------');

    //parameter desctructuring - unpack values from args passed in
    function print({first, last, title}) {
        console.log(`${first} ${last}, ${title}`);
    };
    print(runner);
    const response = [
        'HTTP/1.1',
        '200 OK',
        'application/json'
    ];
    function parseResponse([proto, status, contentType]) {
        console.log(`Status: ${status}`);
    }
    parseResponse(response);