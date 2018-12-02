var express = require('express');
var bodyParser = require('body-parser');
var Event = require('./database-mongo');
var connect = require('connect');
const path = require('path')
const mongoose = require('mongoose')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
mongoose.connect('mongodb://zaid-1994:zaid-1994@ds119394.mlab.com:19394/zahgan')

mongoose.Promise = global.Promise;



var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

//var data=[{Name:'"https://wallpaperbrowse.com5/media/images/pexels-photo-248797.jpeg"' ,HomeWork:'y7ya'}]

// get a list for all events from the db
app.get('/create', function (req, res, next) {
  Event.find({}).then(function (events) {;
    res.send(events)
  }).catch(next)
});


//add new event to the db
app.post('/create', function (req, res, next) {


  Event.create(req.body.obj).then(function (event) {;
    res.send(event)
  }).catch(next)
});

//update a event in the database
app.put('/create/:id', function (req, res, next) {
  Event.findByIdAndUpdate({
    _id: req.params.id
  }, req.body).then(function () {
    Event.findOne({
      _id: req.params.id
    }).then(function (event) {
      res.send(event);

    })
  });
});


//delete a event in  the database
app.delete('/create/:id', function (req, res, next) {
  Event.findByIdAndRemove({
    _id: req.params.id
  }).then(function (event) {
    res.send(event)

  })
});

//error handling middleware
app.use(function (err, req, res, next) {
  // console.log(err);
  res.status(400).send({
    error: err.message
  })
})

//deployment helper

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'react-client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'react-client/build', 'index.html'));
  });
}

app.listen(process.env.PORT || 4000, function () {
  console.log('listening on port 4000!');
});