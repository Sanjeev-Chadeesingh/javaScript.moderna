//8-25-2020 *a short, clean syntax to unpack: values from arrays|properties from objects -into distinct variables
    //unpack specific values from an array into new values
    const raceResults = [
        'Tom Jones',
        'Elvis Prestley',
        'John Lennon',
        'Tom Watts',
        'Neil Young',
        'Eminem'
    ];
    const [gold, silver, bronze] = raceResults;
    //gold is set to Tom Jones, silver to Elvis, bronze to John
    console.log(gold, silver, bronze);
    //commas to skip through elements in array
    const [,,,fourth] = raceResults;
    console.log(fourth);
    //combining destructuring with rest, can skip with commas here too!
    const [winner, ...others] = raceResults;
    console.log(`Winner: ${winner}, Others: ${others}`);