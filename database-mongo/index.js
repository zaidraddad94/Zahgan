const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const EventSchema = new Schema({
    creatorName: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    eventName: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    des: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    url: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    date: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    availableSeats: {
        type: Number,
        required: [true, 'Name Field is Required']

    },
    eventLocation: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    attending: {
        type: Array
    }
});

var Event = mongoose.model('Event', EventSchema);

const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  });
  
  UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  const UserSessionSchema = new mongoose.Schema({
    userId: {
      type: String,
      default: ''
    },
    timeStamp: {
          type: Date,
          default: Date.now()
      },
      isDeleted: {
          type: Boolean,
          default: false
      }
  });

// let save = (data ,cb) => {
//        console.log('hhhhh',data[0].Name)
//     let student = new Student({Name:data[0].Name,HomeWork:data[0].HomeWork});
//     student.save();
// }


// var selectAll = function(callback) {
//   Student.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// module.exports.selectAll = selectAll;
// module.exports.save=save;
module.exports = Event;
module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('UserSession', UserSessionSchema);