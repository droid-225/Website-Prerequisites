const express = require('express');
const app = express();
// you can also write it like this:
// const app = require('express');

// v*************************************************v
// app.get
// app.post
// app.put
// app.delete
// ^ the above are just for the http methods (verbs) ^

// app.all : response which can use all http verbs, usually used for 404 errors
// app.use : middleware

app.get('/', (req, res) => {
    res.status(200).send('Home Page');
}); // will be performed every time there is a request to '/' (root).

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
}); // will be performed every time there is a request to '/' (root).

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>'); // .status() specifically sets the status code
});

// app.listen
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
// pretty much the same as in http