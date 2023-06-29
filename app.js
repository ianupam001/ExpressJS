const express = require('express');
const app = express();
// requiring the routes
const people = require('./routes/people.js');
const auth = require('./routes/auth.js')
// setting up the middlewares
// static assessts -->middleware
app.use(express.static('./methods-public'));
// parse form data -->middleware
app.use(express.urlencoded({ extended: false }))
//parse json data 
app.use(express.json());
// setting up the people & login router -->middleware
app.use('/api/people', people);
app.use('/login', auth)


app.listen(5000, () => {
    console.log('server is listening on port 5000..../');
})