/* global __dirname */

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    restful = require('node-restful'),
    mongoose = restful.mongoose,
    fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use('/build', express.static('build'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

mongoose.connect("mongodb://localhost/resources");

app.get('/', function(req,res) {
   res.file('public/index.html').end(); 
});

fs.readdirSync(__dirname + '/resources').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/resources/' + file)(app);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('The Final Refrain listening at http://%s:%s', host, port);
});