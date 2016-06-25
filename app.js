var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
var server = http.createServer(app);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'html')));

app.use(function(request, response){
  response.send(404);
});

var port = process.env.PORT || '4000';
app.set('port', port);
server.listen(port);
