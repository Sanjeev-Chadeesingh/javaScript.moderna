//requiring the fileSystem module in node
const fs = require('fs');
//first thing to pass is directory you want to open up
    //process.cwd() returns CurrentWorkingDirectory, globally available, no require needed
fs.readdir(process.cwd(), (err, fileNames) => {
    //Either
        //err === an error object, which means something went wrong
    //Or
        //err === null, which means everything is ok

    if(err) {
        //error handling code here
            // throw new Error(err);
            console.log(err);
    }
    console.log(fileNames);
})