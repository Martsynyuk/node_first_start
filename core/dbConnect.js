var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27015/dbName');

var db = MongoClient.connect;
module.exports = db;