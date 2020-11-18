//7-26-2020 -- OBJECTS AND THIS!!!
    //add methods to objects
    //use new object shorthand syntax
    //use computed properties
    //understand prototypes
    //explain how THIS works

    //shorthand properties
    const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
    const getStats = (arr) => {
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        const sum = arr.reduce((t, cV) => t + cV);
        const avg = sum / arr.length;
        return {
            max,
            min,
            sum,
            avg
        }
    };
    console.log(getStats(reviews));

    //computed properties
        //improvement on object literal syntax
        //adding a property with a dynamic key
        //we can use a variable as a key name in an object literal property
    const role = 'host';
    const person = 'Jools Holland';
    const role2 = 'director';
    const person2 = 'James Cameron';
    const team = {
        [role]: person,
        [role2]: person2,
        [1 + 6 + 9]: 'sixteen'
    }

    const addProp = (obj, k, v) => {
        return {...obj, [k]: v};
    }
    const res = addProp(team, 'happy', ';)');
    console.log(res);

    //adding methods to objects
        //we can add functions as properties on objects. We call them methods!
    const math = {
        add(x, y) {
            return x + y;
        },
        multiply(x, y) {
            return x * y;
        }
    }
    let test = math.add(3, 4);
    console.log(test);
    let test2 = math.multiply(3, 4);
    console.log(test2);