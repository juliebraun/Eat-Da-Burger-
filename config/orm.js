var connection = require('./connecton.js');

var orm = {
	all: function(tableInput, cb){
		connection.query("SELECT * FROM " + tableInput + ";", function(err, result){
			if(err)throw err;
			cb(result)
		})
	}
}

module.exports = orm;