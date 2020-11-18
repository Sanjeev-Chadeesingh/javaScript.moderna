//PROMISES!!!!!
    //a pattern for writing async code
    //A promise is an object representing the eventual success or failure of an async operation
        //a returned object to which you attach callbacks, instead of passing callbacks into a function

const dogPromise = new Promise((resolve, reject) => {
    let rand = Math.random();
    if(rand < .5) {
        resolve();
    }
    else {
        reject();
    }
});

dogPromise
//then runs if promise is resolved
.then(() => {
    console.log('RESOLVED!');
})
//catch runs if promise is rejected
.catch(() => {
    console.log('REJECTED');
});