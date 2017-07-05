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
    const dbInstance = new db('localhost', 'dbName');
    dbInstance.insert('users', {
        name: 'Anton Martsynyuk 1',
        age: '34',
        STATUS: 'Drer'
    }).then(
        result => {
            res.render('index',
                {
                    content: 'Home page',
                    title: 'Hey',
                    message: 'Hello there lol!',
                    text: {'s':'asdasd', 'v':'24234'}
                });
        }
    ).catch(
        error => {
            console.log(error);
        }
    );
});

app.get('/login', function (req, res) {
    res.render('login', {
        content: 'Sign In',
        title: 'login'
    });
});

app.get('/all', (req, res) => {
    const dbInstance = new db('localhost', 'dbName');
    dbInstance.selectAll('users').then(

    );

    res.render('all', {
        users: {

        }
    })
});

app.post('/login', function (req, res, next) {
    console.log(req.body.name);
    console.log(req.body.password);
    res.redirect('/');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});