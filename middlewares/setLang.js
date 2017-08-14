"use strict";

function setLang(req, localization) {
    let lang = req.session.lang || 'en';
    localization.setLocale(lang);
}

module.exports = setLang;
