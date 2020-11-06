// const willGetYouADog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if(rand < .5) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// willGetYouADog.then(() => {
//     console.log(`Yay we got a dog`);
// }).catch(() => {
//     console.log(`No dog for us`);
// })

// const makeDogPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();
//             if(rand < .5) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 5000);  
//     });
// };    
//     makeDogPromise().then(() => {
//         console.log(`Yay we got a dog`);
//     }).catch(() => {
//         console.log(`No dog for us`);
//     })

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const pages = {
                    './users': [
                        {id: 1, username: 'Bilbo'},
                        {id: 5, username: 'Esmerelda'}
                    ],
                    './about' : 'This is the about page.'
                };
                const data = pages[url];
                if(data) {
                    resolve({status: 200, data});
                } else {
                    reject({status: 404});
                }
                
        }, 3000)
    })
};

fakeRequest('./users')
.then((res) => {
    console.log('Status Code', res.status);
    console.log('Data', res.data)
    console.log(`Request Worked`);
}).catch((res) => {
    console.log(res.status);
    console.log(`Request Failed`);
})