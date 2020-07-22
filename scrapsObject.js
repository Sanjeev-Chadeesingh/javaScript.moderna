//7-21-2020 -- OBJECTS AND THIS!!!
    //add methods to objects
    //use new object shorthand syntax
        //Shorthand Property
        //easy way to create an object literal when you have variables
        const getStats = (arr) => {
            const max = Math.max(...arr);
            const min = Math.min(...arr);
            const sum = arr.reduce((sum, r) => sum + r);
            const avg = sum / arr.length;
            return {
                // max: max,
                // min: min,
                // sum: sum,
                // avg: avg THIS IS THE OLD WAY
                //SHORTHAND BELOW
                max,
                min,
                sum,
                avg
            }
        };
        const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
        // const stats = getStats(reviews);
        // console.log(stats);
    //use computed properties
    //understand prototypes
    //explain how THIS works

    
   

    const picker = (arr) => {
        let idx = Math.floor(Math.random() * arr.length);
        return arr[idx];
    }

    let cardMaker = () => {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let cardSuit = picker(suits);
        let cardValue = picker(values);
        return {
            cardSuit,
            cardValue
        }
    };
    console.log(cardMaker());