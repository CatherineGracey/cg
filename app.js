var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
var server = http.createServer(app);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
  response.send('<h1>CatherineGracey.com</h1><p>Thanks for your interest in this site. It is currently under redevelopment, and will be back online soon. While you wait, please check out my existing portfolio at <a href="http://www.centaurmagic.com">Centaur Magic</a>.');
});

var port = process.env.PORT || '4000';
app.set('port', port);
server.listen(port);
