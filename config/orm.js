var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            
            callback(result);        
        });
    },
    insertOne: function(burgerName, callback) {
        var insertString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, '0')";
        connection.query(insertString, [burgerName], function(err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        var updateString = "UPDATE burgers SET ";
        updateString += objToSql(objColVals);
        updateString += " WHERE ";
        updateString += condition;

        console.log(updateString);
        connection.query(updateString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};

module.exports = orm;
