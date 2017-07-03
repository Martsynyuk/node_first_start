var MongoClient = require('mongodb').MongoClient;

var db = MongoClient.connect;
module.exports = db;