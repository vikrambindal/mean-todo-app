var express = require('express');
var router = express.Router();

router.get('/', (request, response) => {
    response.json('Hello TODO');
});

module.exports = router;