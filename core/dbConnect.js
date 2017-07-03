var MongoClient = require('mongodb').MongoClient;
var dbName = 'dbName';

var DataBase = {
    insert: function(data) {
        MongoClient.connect('mongodb://localhost:27015/' + dbName, function (err, db) {
            var collection = db.collection('users');
            collection.insertOne(data, function (err, res) {
                if (err) {
                    return console.log(err);
                }
                console.log(res.ops);
                db.close();
            });
        });
    },

    selectAll: function() {
        MongoClient.connect('mongodb://localhost:27015/' + dbName, function (err, db) {
            var collection = db.collection('users');
            console.log(collection.find());
        });
    },
    update: function() {},
    delete: function() {}
};

module.exports = DataBase;