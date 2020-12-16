const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//use passed with middleware allows every route handler to be auto bodyParsed for us
    //this library will detect, no matter what style (get/post) and it will figure out what to do 
        //app.use is used to wire up middleware within the app
app.use(bodyParser.urlencoded({ extended: true }));

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
            //bodyParser is the outside library (instead of handmade)
                //options object added on to urlencoded
                    //this is specifically for HTML forms(urlencoded)
                        //takes incoming request, receives body, parses it, and makes it available on req.body prop
app.post('/', (req, res) => {
    //get access to email, password and passwordConfirmation
      console.log(req.body);
    res.send('Account Created!');
});

//start listening for incoming network reqs, on a particular port
app.listen(3000, () => {
    console.log('Listening!');
});
//web server now running, just have to go to localhost:portNumber
    //http request to the running express web server on local machine
        //we make req, express server sees req and serves res, which browser prints out