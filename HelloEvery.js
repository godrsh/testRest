var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('Server running at http://localhost:3000');
});

app.listen(3000);
console.log('Server running at http://localhost:3000');