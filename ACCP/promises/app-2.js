// const fighterPromise = (sources) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fighters = {
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
//         const data = fighters[sources];
//         if(data) {
//             resolve({data});
//         } else {
//             reject({status: 'error'})
//         }
//         }, 500)
//     })
// };

// fighterPromise('fighters').then((res) => {
//     console.log(res.data[0].record);
// }).catch(() => {
//     console.log(`ERROR!!`);
// });



var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));
