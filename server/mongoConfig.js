var mongo = require('mongodb');
var client = mongo.MongoClient;

module.exports = { 
    connect(callback) {
        client.connect("mongodb://localhost:27017/todo-dev", (error, db) => {
            if (error) {
                console.log("Error connecting to MongoDB...");
                process.exit(1);
            }
            console.log("Sucessfully connected to MongoDB");
            callback(db);
        });
    }
};