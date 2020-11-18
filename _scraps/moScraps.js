// defaultParameters|spread|rest

//default parameters
    function multiply(x, y = 1) {
        return x * y;
    }
    console.log(multiply(5));

//spread => EXPANSION functionCall arrayLiteral objectLiteral to Another Destination
    
    //functionCall
    let nums = [23, 45, 565, 1, 2, 6];
    console.log(Math.max(...nums));

    //arrayLiteral
    const cephalopods = ['dumbo octopus', 'humbolt squid', 'flamboyant cuttlefish'];
    const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
    const cnidaria = ['fire coral', 'moon jelly'];
    const mollusca = [...cephalopods, ...gastropods];
    console.log(mollusca);

    //objectLiteral
    const feline = {
        legs: 4,
        family: 'Felidae'
    };
    const canine = {
        family: 'Caninae',
        furry: true
    };

    const dog = {
        ...canine,
        isPet: true,
        adorable: true
    };
    console.log(dog);
    const catDog = {
        ...canine, ...feline
    };
    console.log(catDog);

//rest => collects all remaining arguments into an actual array, used after defining explicit args, for the 'rest' of them
    function sum(...nums) {
        return nums.reduce((t, cV) => {
            return t + cV;
        })
    }
    console.log(sum(4, 5, 6, 7, 8, 9));

    const factorI = (...nums) => (
        nums.reduce((t, cV) => t * cV)
    )
    console.log(factorI(2, 3, 4));