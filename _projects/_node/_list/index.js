#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (err, fileNames) => {
    if(err) {
        console.log(err);
    }

    // BAD CODE HERE
    for (let fileName of fileNames) {
        fs.lstat(fileName, (err, stats) => {
            if (err) {
                console.log(err);
            }
            console.log(fileName, stats.isFile());
        })
    }
    // BAD CODE COMPLETE
});
