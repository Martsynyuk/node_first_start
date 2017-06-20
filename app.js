'use strict';

var express     = require('express'),
    app         = express(),
    db          = require('./core/dbConnect');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.set('views', 'views');

app.get('/', function(request, response) {
    response.render('index',
        {
            title: 'Hey',
            message: 'Hello there lol!',
            text: {'s':'asdasd', 'v':'24234'}
        });
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});