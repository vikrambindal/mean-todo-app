var express = require('express');
var router = express.Router();

router.get('/', (request, response) => {
    response.json('Hello TODO');
});

router.post('/todo', (request, response) => {
    console.log('Data recieved : ' + request.body);
    response.sendStatus(200);
});

module.exports = router;