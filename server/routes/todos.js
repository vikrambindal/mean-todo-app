var express = require('express');

var router = express.Router();

router.get('/', (request, response) => {
    todoCollection.find().toArray((err, docs) => {
        console.log('Obtained ' + docs.length + ' items');
    });
});

router.post('/todo', (request, response) => {
    todoCollection.save( {item: request.body.todoitem});
    response.sendStatus(200);
});

module.exports = router;