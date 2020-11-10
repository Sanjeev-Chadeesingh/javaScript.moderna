// const dogPromise = () => {
//     return new Promise((resolve, reject) => {
//         let rand = Math.random();
//         setTimeout(() => {
//             if(rand < .5) {
//                 reject({status: 404});
//             } else {
//                 resolve({status: 200});
//             }
//         }, 3000)
//     })
// };

// dogPromise().then((res) => {
//     console.log('RESOLVED!');
//     console.log(res.status);
// }).catch((res) => {
//     console.log('REJECTED')
//     console.log(res.status);
// });

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const pages = {
                    '/users' : [
                        {id: 1, username: 'Bilbo'},
                        {id: 5, username: 'Esmerelda'}
                    ],
                    '/about' : 'This is the about page.'
                };
                const data = pages[url];
                if(data) {
                    resolve({status: 200, data});
                } else {
                    reject({status: 404});
                }
        }, 1000)
    });
};
fakeRequest('/users').then((res) => {
    console.log(res.data);
    console.log(`Status code: ${res.status}`);
    console.log(`Data: ${res.data[0].username}`);
    console.log('REQUEST WORKED');
}).catch((res) => {
    console.log(res.status);
    console.log('REQUEST FAILED');
});

fakeRequest('/dogs').then((res) => {
    console.log(`Status code: ${res.status}`);
    console.log(`Data: ${res.data}`);
    console.log('REQUEST WORKED');
}).catch((res) => {
    console.log(res.status);
    console.log('REQUEST FAILED');
});