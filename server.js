var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
console.log('hello');
app.listen(8080, function(){
    console.log('Listening on post 8080');
});
