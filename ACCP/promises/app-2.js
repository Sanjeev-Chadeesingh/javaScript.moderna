const dogPromise = () => {
    return new Promise((resolve, reject) => {
        let rand = Math.floor(Math.random() * 5) + 1;
        setTimeout(() => {
            if(rand < 3) {
                resolve();
            } else {
                reject();
            }
            
        }, 1000)
    })
};
dogPromise().then(() => {
    console.log('DOG');
})
.catch(() => {
    console.log('NO DOG');
});




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