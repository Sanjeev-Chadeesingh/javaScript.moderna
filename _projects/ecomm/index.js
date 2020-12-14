const express = require('express');

const app = express();

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

//middleware function, always 3 args (req, res, next)
    //next is a callback given to us from express framework
const bodyParser = (req, res, next) => {
    if (req.method === 'POST') {
        req.on('data', (data) => {
            const parsed = data.toString('utf8').split('&');
            const formData = {};
            for (let pair of parsed) {
                const [key, value] = pair.split('=');
                formData[key] = value;
            }
            req.body = formData;
            //letting express know we are done
            next();
        });
    } else {
        //this is signal we are done with processing
        next();
    }
}

app.post('/', bodyParser, (req, res) => {
    console.log(req.body);
    res.send('Account created!');
});

app.listen(3000, () => {
    console.log('Listening');
});