const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
    return res.send('All Speakers')
});

router.get('/:name', (req, res, next) => {
    return res.send(`Details of the speaker ${req.params.name}`)
})

module.exports = router

