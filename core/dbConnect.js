const { MongoClient } = require('mongodb');
const dbName = 'dbName';

/**
 * Class Database
 */
class Database {

    /**
     * @param {string}      host    Mongodb connection host
     * @param {string}      dbName  Mongodb database name
     * @param {string|int}  [port]  Mongodb connection port
     */
    constructor (host, dbName, port = 27015) {

        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject  = reject;
        });

        this.host   = host;
        this.dbName = dbName;
        this.port   = port;
    }

    _connectionString () {
        return `mongodb://${this.host}:${this.port}/${this.dbName}`;
    }

    _executeConnection (callback, data = {}) {
        MongoClient.connect(this._connectionString(), (err, db) => {
            if (err) {
                throw err;
            }

            callback(data, db);
        });
    }

    insert (collection, data) {

        this._executeConnection((data, db) => {
            db.collection(collection).insertOne(data, (err, res) => {
                if (err) {
                    this.reject(err);
                } else {
                    this.resolve(res);
                }
                db.close();
            })
        }, data);

        return this.promise;
    }

    selectAll (collection) {

        this._executeConnection((data, db) => {
            db.collection(collection).find().toArray((err, res) => {

                if (err) {
                    this.reject(err);
                } else {
                    this.resolve(res);
                }
                db.close();
            })
        });

        return this.promise;
    }

}

// var Database = {
//     connect: function (callback, data) {
//         MongoClient.connect('mongodb://localhost:27015/' + dbName, function(err, db) {
//             callback(data, err, db);
//         })
//     },
//
//     insert: function(data, err, db) {
//         var collection = db.collection('users');
//         collection.insertOne(data, function (err, res) {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log(res.ops);
//             db.close();
//         });
//     },
//
//     selectAll: function() {
//         var collection = db.collection('users');
//     },
//     update: function() {},
//     delete: function() {}
// };

module.exports = Database;