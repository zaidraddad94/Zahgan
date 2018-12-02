var mongoose = require('mongoose');
mongoose.connect('mongodb://yahya:y123456@ds125821.mlab.com:25821/bloggerdatabase');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  Name: String,
  HomeWork: String,
});

var Student = mongoose.model('Student', itemSchema);
// var save=Student(data).save(function(err){
// if(err)throw err ;
// console.log("saved")
// })


let save = (data ,cb) => {
       console.log('hhhhh',data[0].Name)
    let student = new Student({Name:data[0].Name,HomeWork:data[0].HomeWork});
    student.save();
}


var selectAll = function(callback) {
  Student.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save=save;
module.exports.Student = Student;