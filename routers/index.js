"use strict";

const express     = require('express')
     , router     = express.Router()
     , localizate = require('localize')
     , translate  = require('./translate');

router.get('/', (req, res, next) => {
    res.render('index', {
        test: 'Anton'
    });
});

router.get('/test', (req, res, next) => {

    let myLocalize = new localizate(translate.main);

    console.log(myLocalize.translate("Testing..."));
    console.log(myLocalize.translate("Substitution"));
    console.log(myLocalize.translate("test1"));

    myLocalize.setLocale("es");
    console.log(myLocalize.translate("Testing..."));
    console.log(myLocalize.translate("Substitution"));
    console.log(myLocalize.translate("test1"));

    myLocalize.setLocale("sr");
    console.log(myLocalize.translate("Substitution"));
    console.log(myLocalize.translate("test1"));
    res.render('test')
});

module.exports = router;
