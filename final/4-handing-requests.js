const express = require('express');
const app = express();
const { products } = require('./data');

//home page
app.get('/', (req, res) => {
    res.send('<h1>Home Page </h1><a href="api/products">products</a>')
})
// /api/products
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product; // destructuring
        return { id, name, image }
    })
    res.json(newProducts)
})


// api/products/1 --> single product
app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);

    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})
// handeling the params
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    //console.log(req.params);
    res.send('hello world')


})
// handeling the query
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products] // spreading the values

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length > 1) {
        //res.status(200).send('no products match tour search')
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts);
})


app.listen(5000, () => {
    console.log('server is listening on port 5000../');
})