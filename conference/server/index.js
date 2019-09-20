const express = require('express');
const app = express()
const path = require('path')

app.set('view engine', 'pug');
if(app.get('env') == 'development'){
    app.locals.pretty = true;
}
app.set('views', path.join(__dirname, './views'))

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

// All the other routes except which are defined, redirects to this middleware. 
// It throws 404 response for all the other pages 
app.use(function(req, res, next){
    res.status(404).send('Sorry!, cannot find the requested page');
})

app.listen(3000, () => {
    console.log('Server listening at port 3000')
})

module.exports = app