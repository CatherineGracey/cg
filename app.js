var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
var server = http.createServer(app);
app.use(express.static(path.join(__dirname, 'public'), {maxAge: 1200000}));
app.use(express.static(path.join(__dirname, 'html'), {maxAge: 1200000}));

app.use(function(request, response){
  response.sendStatus(404);
});

var port = process.env.PORT || '4000';
app.set('port', port);
server.listen(port);
