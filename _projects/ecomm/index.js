const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//this in .use() lets the middleware function work on every route handler, allowing middleware to get parsed 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
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
    //request to root (/) will send response of 'hi there!'
});

//using external library for middleware
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Account created!');
});

app.listen(3000, () => {
    console.log('Listening');
});