const express = require('express');
const app = express();
// req -> middleware -> res
// middleware does something before sending out response

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next(); // you have to invoke next or terminate
}

// when working with middleware you MUST pass it on to the next middleware
// unless terminating the whole cycle

app.get('/', logger, (req, res) => {
    res.send('Home');
});

app.get('/about', logger, (req, res) => {
    res.send('About');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});