//8-28-2020 *OBJECT METHODS 
    //explain how this works
    //add methods to objects
    //use new object shorthand syntax
    //use computed properties
    //understand prototypes
        //SHORTHAND PROPERTIES
            let printStats = (arr) => {
                let max = Math.max(...arr);
                let min = Math.min(...arr);
                let sum = arr.reduce((sum, cV) => sum + cV);
                let avg = sum / arr.length;
                /*
                return {
                    max: max,
                    min: min,
                    sum: sum,
                    avg: avg
                    this is the old way, below is YOUR SHORTHAND PROPERTY!
                }
                */
                return {
                    max,
                    min,
                    sum,
                    avg
                }
            };
            const reviews = [5, 4.4, 4.3, 4.1, 3.2, 2.5];
            console.log(printStats(reviews));