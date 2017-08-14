"use strict";

const express       = require('express')
    , path          = require('path')
    , bodyParser    = require('body-parser')
    , app           = express()
    , index         = require('./routers/index')
    , tasks         = require('./routers/tasks')
    , session       = require('express-session')
    , sessionConfig = require('./config/session_config')
    , localizate    = require('localize')
    , translate     = require('./routers/translate');
global.local        = new localizate(translate.main);
global.lang         = 'en';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.engine('pug', require('pug').renderFile);

app.use(express.static(path.join(__dirname + '/client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session(sessionConfig));
app.use('/', index);
app.use('/api', tasks);

app.locals.translate = ((text) => {
    return local.translate(text);
});

function setLang() {

}

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.use('/api', tasks);