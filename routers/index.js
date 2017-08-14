"use strict";

const express     = require('express')
     , router     = express.Router()
     , localizate = require('localize')
     , translate  = require('./translate')
     , app        = express()
     , setLang    = require('../middlewares/setLang');

router.get('/', (req, res, next) => {
    res.render('index', {
        test: 'Anton'
    });
});

router.get('/test', (req, res, next) => {
    res.render('test')
});

router.post('/test1', (req, res, next) => {
    lang = req.body.lang;
    req.session.lang = req.body.lang;
    setLang(req, local);
    return {status: 'ok'};
});

module.exports = router;
