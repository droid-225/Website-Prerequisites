const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    });

    res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => { // the :productID is called a route parameter
    //console.log(req);
    //console.log(req.params); // contains parameter value
    const {productID} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID));

    if(!singleProduct) {
        return res.status(404).send('Product Does Not Exist!');
    }

    res.json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
    //console.log(req.query); // returns query value
    // two or more query values are joined using '&' with no space in between
    
    const{search, limit} = req.query;
    let sortedProducts = [...products];

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if(sortedProducts.length < 1) {
        // You can use either of these two:
        return res.status(200).send("No Products Match Your Search");
        //return res.status(200).json({success: true, data: []}); // return is required here so JS doesn't keep reading code
    }

    return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});