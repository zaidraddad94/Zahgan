var express = require('express');
var bodyParser = require('body-parser');
var students = require('../database-mongo');
var connect = require ('connect');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
 app.use(express.static(__dirname + '/react-client/public'));
//var data=[{Name:'asraf' ,HomeWork:'y7ya'}]

   if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.get('/items', function (req, res) {
  students.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log('my get data' ,data)
    }
  });
  });


app.listen(process.env.PORT||4000, function() {
    console.log('listening on port 4000!');
  });