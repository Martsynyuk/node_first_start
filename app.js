'use strict';

var express          = require('express')
  , app              = express()
  , db               = require('./core/dbConnect')
  , bodyParser       = require('body-parser')
  , expressValidator = require('express-validator');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'jade');
app.set('views', 'views');

app.get('/', function(req, res) {
    db.insert({
            name: 'terr',
            age: '34',
            STATUS: 'LOL'
            }, function () {
        db.selectAll();
    });

    res.render('index',
        {
            content: 'Home page',
            title: 'Hey',
            message: 'Hello there lol!',
            text: {'s':'asdasd', 'v':'24234'}
        });
});

app.get('/login', function (req, res) {
    res.render('login', {
        content: 'Sign In',
        title: 'login'
    });
});

app.post('/login', function (req, res, next) {
    console.log(req.body.name);
    console.log(req.body.password);
    res.redirect('/');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});