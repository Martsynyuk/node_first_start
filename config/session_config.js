"use strict";

const sessionConfig = {
    secret: 'super secret ))',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
};

module.exports = sessionConfig;
