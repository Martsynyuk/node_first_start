"use strict";

const express    = require('express')
    , path       = require('path')
    , bodyParser = require('body-parser')
    , app        = express()
    , index      = require('./routers/index')
    , tasks      = require('./routers/tasks');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('pug', require('pug').renderFile);

app.use(express.static(path.join(__dirname + 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', index);
app.use('/api', tasks);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.use('/api', tasks);


