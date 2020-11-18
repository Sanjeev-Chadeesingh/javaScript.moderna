//When you reject or resolve a promise, you can do so with a value that you can access in your callbacks you pass to then() or catch()

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const pages = {
                    '/users' :[
                        {id: 1, username: 'Bilbo'},
                        {id: 5, username: 'Esmereleda'}
                    ], 
                    '/about' : 'This is the about page.'
                };
                const data = pages[url]
                if(data) {
                    //here we pass data, accessible in our related then(), if we give then() a data parameter
                    resolve({status: 200, data});    
                } else {
                    //here we pass data, accessible in our related catch(), if we give catch() a data parameter
                    reject({status: 404});
                }
                
        }, 1000)
    })
};

//res is the data parameter from resolve() with the promise above
fakeRequest('/about').then((res) => {
    console.log(res.status);
    console.log(res.data);
    console.log('WORKED');
})
//res is the data parameter from reject() within the promise above
.catch((res) => {
    console.log(res.status);
    console.log("FAILED");
})

//res is the data parameter from resolve() with the promise above
fakeRequest('/dogs').then((res) => {
    console.log(res.status);
    console.log(res.data);
    console.log('WORKED');
})
//res is the data parameter from reject() within the promise above
.catch((res) => {
    console.log(res.status);
    console.log("FAILED");
})