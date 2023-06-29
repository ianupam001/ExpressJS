const express = require('express');
const app = express();
//home page
app.get('/', (req, res) => {
    console.log('user hit the resource');
    res.status(200).send('Home page')
})
//about page
app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

// 404 response
app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000../');
})
//app.get
//app.post
//app.put
//app.use
//app.delete
//app.all
//app.listen