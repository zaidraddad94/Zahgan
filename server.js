var express = require('express');
var bodyParser = require('body-parser');
var students = require('./database-mongo');
var connect = require ('connect');
const path = require('path')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
var data=[{Name:'https://www.gettyimages.in/landing/assets/static_content/home/info-tabs3.jpg' ,HomeWork:'rami'}]

app.get('/items', function (req, res) {
 // console.log('hhhhh',data)
  students.save(data);
  students.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log('my get data' ,data)
    }
  });
  });

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'react-client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'react-client/build', 'index.html'));
  });
} 

app.listen(process.env.PORT||4000, function() {
    console.log('listening on port 4000!');
  });