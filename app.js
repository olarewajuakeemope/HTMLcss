var express = require('express');
var path = require('path');

var app = express();
var router = express.Router();

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './') });
})

app.listen(process.env.PORT || 3000, function() {
  console.log('Listening at port 3000!')
})
