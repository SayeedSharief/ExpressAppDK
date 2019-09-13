const express = require('express');
const app = express()

/* just give the folder name where the routes are defined if 'index.js' is file containing the routes, 
    express will pick the index.js file */
const routes = require('./routes')

const speakers = require('./routes/speakers')

const feedback = require('./routes/feedback')

app.use('/', routes);

/* to serve static files like images, css, html etc, use
    middleware to serve the contents
    eg: to access style.css type 'http://localhost:3000/css/style.css' */
app.use(express.static('public'))

// middleware to access all the routes of the speakers module
app.use('/speakers', speakers)

// middleware to access all the routes of the feedback module
app.use('/feedback', feedback)

app.listen(3000, () => {
    console.log('Server listening at port 3000')
})

module.exports = app