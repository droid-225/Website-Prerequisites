const express = require("express");
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public')); // this is absolute fire
// all the elements are static because they are static in respect to the server itself

/*
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html')); // here we can also use .join
    // but since it's an absolute path, we want to make sure it knows that it is an absolute path
});
*/

app.all('*', (req, res) => {
    res.status(404).send('resource not found');
});

app.listen(5000, () => {
    console.log("Server is listening on part 5000");
});