const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require('./logger-middleware.js') // requiring the middleware
const authorize = require('./authorise.js');

//app.use([logger,authorize]) 

//app.use([authorize,logger])
app.use(morgan('tiny')) // morgan middleware

// we can use the middleware in all the routes and order of this matters here
// we can also add path to the middleware 
//api/home/about/products

// req => middleware => res
// 1. use vs route
// 2. options - our own / express / third party

app.get('/', (req, res) => {
    res.send('Home page')
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    res.send('Items')
})
//port 
app.listen(5000, () => {
    console.log('server is listening on port 5000../');
})