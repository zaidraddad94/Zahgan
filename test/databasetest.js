const assert = require('assert');
const Student = require('../database-mongo/index');


describe('save',function(){
  var char;
  //save to database to see it is saving or not
	it('save to database',function(done){
    	char = new Student.Student({
     		 Name: 'Yahye',
      		HomeWork:'Javascript',
    	});

    	char.save().then(function(){
      	assert(!char.isNew);
      	done();
    	});

	});

//delete one from the database to check if you can remove specific one
	it('Delete specific one from the database', function(done){
    	Student.Student.findOneAndRemove({Name: 'Yahye'}).then(function(){
      		Student.Student.findOne({Name: 'Yahye'}).then(function(result){
        		assert(result === null);
        		done();
      		});
    	});
  	});

  //update one 

  it('Updates the saved data', function(done){
      Student.Student.findOneAndUpdate({Name: 'Farah'}, {Name: 'None'}).then(function(){
          Student.Student.findOne({_id: char._id}).then(function(result){
              assert(result.Name === 'None');
              done();
          });
      });
  });



});
