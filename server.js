var express = require('express');
var bodyParser = require('body-parser');
var Event = require('./database-mongo');
var connect = require('connect');
const path = require('path');
const mongoose = require('mongoose');

const User = require('./database-mongo/User');
const UserSession = require('./database-mongo/UserSession');

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
  Event.find({}).then(function (events) {
    ;
    res.send(events)
  }).catch(next)
});


//add new event to the db
app.post('/create', function (req, res, next) {

  Event.create(req.body.obj).then(function (event) {
    ;
    res.send(event)
  }).catch(next)
});



//update a event in the database
app.put('/create/:id', function (req, res, next) {
  console.log(req.body)
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

// Signup User
app.post('/account/signup', (req, res, next) => {
  // console.log(req.body);
  const { body } = req;
  const {
    firstName,
    lastName,
    password
  } = body;
  let {
    email
  } = body;

  if (!firstName) {
    return res.send({
      success: false,
      message: 'Error: First name cannot be blank.'
    });
  }
  if (!lastName) {
    return res.send({
      success: false,
      message: 'Error: Last name cannot be blank.'
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  console.log('here')

  email = email.toLowerCase();

  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  User.find({
    email: email,
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error.'
      })
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exists.'
      });
    }

    // Save the new user
    const newUser = new User();

    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error.'
        });
      }
      return res.send({
        success: true,
        message: 'Signed up'
      });
    });
  });
});

// Signin User
app.post('/account/signin', (req, res, next) => {
  const { body } = req;
  const {
    password
  } = body;
  let {
    email
  } = body;

  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();

  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: server error.'
      });
    }
    if (users.length != 1) {
      return res.send({
        success: false,
        message: 'Error: invalid.'
      });
    }

    const user = users[0];
    if (!user.validPassword(password)) {
      return res.send({
        success: false,
        message: 'Error: Invalid Password.'
      });
    }

    // Otherwise correct user
    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err, doc) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error.'
        });
      }
      return res.send({
        success: true,
        message: 'Valid sign in',
        token: doc._id
      });
    })
  });
});

// Verify User
app.get('/account/verify', (req, res, next) => {
  // Get the token
  const { query } = req;
  const { token } = query;
  // ?token = test

  // Verify the token is one of a kind and is not deleted

  UserSession.find({
    _id: token,
    isDeleted: false
  }, (err, sessions) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: server error'
      });
    }

    if (sessions.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    } else {
      return res.send({
        success: true,
        message: 'Good'
      })
    }
  })
});

// User Logout
app.get('/account/logout', (req, res, next) => {
  // Get the token
  const { query } = req;
  const { token } = query;
  // ?token = test

  // Verify the token is one of a kind and is not deleted

  UserSession.findOneAndUpdate({
    _id: token,
    isDeleted: false
  }, {
      $set: {
        isDeleted: true
      }
    }, null, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }

      return res.send({
        success: true,
        message: 'Good'
      })

    })
});