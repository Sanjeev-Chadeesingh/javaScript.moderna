const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random();
            if(rand < .5) {
                resolve();
            } else {
                reject();
            }
        }, 5000);
    });
} 

//this function RETURNS the promise
makeDogPromise()
.then(() => {
    console.log('GOTTA DOG');
})
.catch(() => {
    console.log('NO DOG');
});

// const fightPromiser = () => {
//     return new Promise((resolve, reject) => {

//     })
// }

 //const fighters = {
    //                 'fighters' : [
    // {
    //     firstName: 'Khabib',
    //     lastName: 'Nurmagomedov',
    //     origin: 'Dagestan',
    //     record: {
    //         wins: 29,
    //         losses: 0
    //     }
    //     },
    //     {
    //     firstName: 'Kamaru',
    //     lastName: 'Usman',
    //     origin: 'USA',
    //     record: {
    //         wins: 18,
    //         losses: 1
    //     }
    //     },
    //     {
    //     firstName: 'Israel',
    //     lastName: 'Adesanya',
    //     origin: 'New Zealand',
    //     record: {
    //         wins: 20,
    //         losses: 0
    //     }
    //     },
    //     {
    //     firstName: 'Jan',
    //     lastName: 'Blachowicz',
    //     origin: 'Poland',
    //     record: {
    //         wins: 27,
    //         losses: 8
    //     }
    //     },
    //                 ]
    //             }  