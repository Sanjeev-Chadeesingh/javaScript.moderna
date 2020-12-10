#!/usr/bin/env node

const fs = require('fs');
const util = require('util');

//Method 2
// const lstat = util.promisify(fs.lstat);

//Method 3
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, fileNames) => {
    if(err) {
        console.log(err);
    }

    const statPromises = fileNames.map((fileName) => {
        return lstat(fileName);
    });

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats) {
        const index = allStats.indexOf(stats);
        console.log(fileNames[index], stats.isFile());
    }

});



// const lstat = (fileName) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(fileName, (err, stats) => {
//             if (err) {
//                 reject(err);
//             }

//             resolve(stats);
//         })
//     })
// };
