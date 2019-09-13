const express = require('express')
const http = require('http')
const app = express()

app.use((req, res, next) => {
    res.setHeader('x-server-date', new Date().toString())
    return next();
})

app.get('/', (req, res, next)=>{
    res.send('Hello World')
})

app.get('/time', (req, res, next) => {
    res.send(new Date().toString())
})

// throw error 
app.get('/throw', (req, res, next) => {
    throw new Error('Something went wrong')
})

/* throw error using next(), 
    advantage: 
    1. Bad practice to throw error from asynchronous callback like above example
    2. Will not terminate the node execution
*/
app.get('/next', (req, res, next) => {
    setTimeout(() => {
        // app will crash by using throw statement
        throw new Error('Something went wrong');

        // use next() instead
        return next(new Error('Something went wrong'));
    }, 1000)
})

// here username  is optional because of '?' present after username
app.get('/welcome/:username?', (req, res, next) => {
    console.log(req.params)
    if(req.params.username == undefined){
        return res.send('User Not logged In')
    }
    res.send(`Welcome ${req.params.username}`)
})

app.get('/hello', (req, res, next) => {
    if(!req.query.name){
        res.sendStatus(400).end()
    }
    res.send(`Hello ${req.query.name}`)
})

// ? is used to call this endpoint in either way, '/user/sayeed' or 'users/sayeed'
app.get('/users?/:name', (req, res, next) => {
    // console.log(req)
    res.send(`User Profile of ${req.params.name}`)
})
app.get('/login/:username/:password', (req, res, nexy) => {
    let result = req.params
    console.log('result =', result)
    res.send(result)
})
app.listen(3000, ()=>{
    console.log('Server listening at port 3000')
})