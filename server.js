var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 8000);

app.use('/', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
  console.log('Listening on port: ' + app.get('port'));
});
