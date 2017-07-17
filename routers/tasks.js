"use strict";

let express = require('express')
    , router  = express.Router();

router.get('/tasks', (req, res, next) => {
    res.send('Tasks test');
});

module.exports = router;
