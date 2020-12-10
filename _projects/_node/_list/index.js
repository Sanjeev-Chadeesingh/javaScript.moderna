#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const chalk = require('chalk');

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

        if (stats.isFile()) {
            console.log(chalk.blue(fileNames[index]));
        } else {
            console.log(chalk.red(fileNames[index]));
        }

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
