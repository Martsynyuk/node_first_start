"use strict";

let express = require('express')
  , router  = express.Router();

router.get('/', (req, res, next) => {
    res.render('index.html');
});

module.exports = router;
