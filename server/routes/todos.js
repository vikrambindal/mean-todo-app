var express = require('express');
var ObjectID = require('mongodb').ObjectID;

var router = express.Router();

router.get('/', (request, response) => {
    todoCollection.find().toArray((err, docs) => {
        response.json(docs);
    });
});

router.post('/todo', (request, response) => {
    todoCollection.insertOne( {item: request.body.todoitem}, (error, result) => {
        response.json(result.ops[0]);
        response.status(200);
    });
});

router.delete("/todo/:id", (request, response) => {
    _todoId = new ObjectID(request.params.id);
    todoCollection.deleteOne({_id: _todoId}, (error, result) => {
        response.sendStatus(200);
    });
});

module.exports = router;