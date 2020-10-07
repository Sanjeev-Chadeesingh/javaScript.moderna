//8-25-2020 DESTRUCTURING OBJECTS *unpack values from an object into standalone variables
    //base variable names off names of properties instead of position
    const shifter = {
        first: 'Carol',
        last: 'Perez',
        country: 'USA',
        title: 'Gray Shifter'
    }
    //use object brackets, set it equal to OG object
    const {first, last} = shifter;
    //finds property based on name, sets variable to it
    console.log(first, last);
    //variable names must be key names of object, except like below
    const {country: nation, title: honorific} = shifter;
    //makes variable called nation based off value found in country
    console.log(nation);
    //can use rest operator
    const {first, last, ...other} = shifter;
    console.log(other);

