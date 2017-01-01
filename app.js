var express = require('express');
var bodyParser = require('body-parser');
var ejsRender = require('ejs');
var path = require('path');
var config = require('config');
var app = express();
var mongoUtil = require('./server/mongoConfig.js');

todoCollection = '';
mongoUtil.connect(function(db){
    todoCollection = db.collection('todo');
});

//Configurations
app.set('view engine', 'ejs');
app.engine('html', ejsRender.renderFile);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Read configuration from config/default.json
var portNumber = config.get("Local.server.port");

//Serve static files
app.use('/client', express.static(__dirname +  '/client'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/rxjs', express.static(__dirname + '/node_modules/rxjs/'));
app.use(express.static(__dirname + '/systemjs.config.js'));

//All routes to todos configured here
var index = require('./server/routes/index');
var todos = require('./server/routes/todos');
app.use('/', index);
app.use('/api/v1/', todos);

app.listen(portNumber, function() {
    console.log("Listening on port " + portNumber);
});

module.exports = app;
