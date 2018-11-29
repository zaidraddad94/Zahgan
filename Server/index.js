var express = require('express');
var bodyParser = require('body-parser');
var students = require('../database-mongo');
var connect = require ('connect');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//var data=[{Name:'asraf' ,HomeWork:'y7ya'}]


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