var express = require('express');

var router = express.Router();

router.get('/', (request, response) => {
    todoCollection.find().toArray((err, docs) => {
        var todoitems = docs.map((doc)=> doc.item);
        response.send(todoitems).status(200);
    });
});

router.post('/todo', (request, response) => {
    todoCollection.save( {item: request.body.todoitem});
    response.sendStatus(200);
});

module.exports = router;