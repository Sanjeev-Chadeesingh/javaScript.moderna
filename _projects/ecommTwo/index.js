const express = require('express');

const app = express();

//req is browser to server
//res is server to browser
    //anytime someone makes a request to the root route of app, we run this callback
        //string goes back to whomever made the request
app.get('/', (req, res) => {
    //i am a route handler
    res.send('Hiyah There!');
});

//start listening for incoming network reqs, on a particular port
app.listen(3000, () => {
    console.log('Listening!');
});