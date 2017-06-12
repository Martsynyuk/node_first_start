'use strict';

var express     = require('express');
var MongoClient = require('mongodb').MongoClient;
var app         = express();

app.set('view engine', 'jade');
app.set('views', 'views');

app.get('/', function(request, response) {
    /*MongoClient.connect('mongodb://localhost:27015/dbName', function(err, db){
        console.log(db);
    });*/
    //response.send('test');
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