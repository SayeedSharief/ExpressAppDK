const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
    return res.render('index')
});

module.exports = router

//   OR

// module.exports = () => {
//     router.get('/', (req, res, next) => {
//         return res.send('Index Page')
//     });

//     return router;
// }