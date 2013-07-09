var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFileSync('index.html', "utf-8", function(err, data) {
	if (err) throw err;
	var buffer = new Buffer(256, "utf-8");
	var len = buffer.write(data, 0);    
	response.send(buffer.toString("utf-8", 0, len));
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
