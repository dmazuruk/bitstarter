var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFileSync('index.html', {encoding: 'utf-8'}, function(err, data) {
	if (err) throw err;
	var buffer = new Buffer(16);
	buffer.write(data, 'utf-8');    
	response.send(buffer.toString());
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
