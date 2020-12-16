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
    //this lets the user know their form submission was received
        //request handler
app.post('/', (req, res) => {
    //get access to email, password and passwordConfirmation
        //think of reqObject like an HTML element, and on like addEventListener
            //the data log is the req body in byte form
    req.on('data', (data) => {
            //now logging data and changing it into a string!
        // console.log(data.toString('utf8'));
        const parsed = data.toString('utf8').split('&');
        const formData = {};
        for (let pair of parsed) {
            const [key, value] = pair.split('=');
            formData[key] = value;
        }
        console.log(formData);
    })
    res.send('Account Created!');
});

//start listening for incoming network reqs, on a particular port
app.listen(3000, () => {
    console.log('Listening!');
});
//web server now running, just have to go to localhost:portNumber
    //http request to the running express web server on local machine
        //we make req, express server sees req and serves res, which browser prints out