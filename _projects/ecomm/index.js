const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hi there!');
    //request to root (/) will send response of 'hi there!'
});

app.listen(3000, () => {
    console.log('Listening');
});