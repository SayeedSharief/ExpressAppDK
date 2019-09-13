const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
    return res.send('Feedback Home')
});

router.get('/:name', (req, res, next) => {
    return res.send(`Feeback given the speaker ${req.params.name}`)
})

module.exports = router

