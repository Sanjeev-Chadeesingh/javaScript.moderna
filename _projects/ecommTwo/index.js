const express = require('express');

const app = express();

//req is browser to server
//res is server to browser
    //anytime someone makes a request to the root route of app, we run this callback
        //string goes back to whomever made the request
app.get('/', (req, res) => {
    //i am a route handler
    res.send(`
        <div>
            <form method="POST">
                <input name="email" placeholder="email" />
                <input name="password" placeholder="password" />
                <input name="passwordConfirmation" placeholder="password confirmation" />
                <button>sign up</button>
            </form>
        </div>
    `);
});

//this post is to handle the above get
app.post('/', (req, res) => {
    res.send('Account Created!');
});

//start listening for incoming network reqs, on a particular port
app.listen(3000, () => {
    console.log('Listening!');
});
//web server now running, just have to go to localhost:portNumber
    //http request to the running express web server on local machine
        //we make req, express server sees req and serves res, which browser prints out