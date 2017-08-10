"use strict";

const express     = require('express')
     , router     = express.Router()
     , localizate = require('localize')
     , translate  = require('./translate')
     , app        = express();

router.get('/', (req, res, next) => {
    res.render('index', {
        test: 'Anton'
    });
});

router.get('/test', (req, res, next) => {
    res.render('test')
});

router.post('/test1', (req, res, next) => {
    lang(req.body.lang);
    return res.render('test');
});

module.exports = router;
