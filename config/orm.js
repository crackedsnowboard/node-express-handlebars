var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) {
          throw err;
      }
      console.log(result);
      cb(result);
    });
    },
    insertOne: function(tableInput, colToSearch, cb) {
      var queryString = "INSERT INTO ?? FROM ??";
  
      console.log(queryString);
  
      connection.query(queryString, [tableInput, colToSearch], function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        cb(result);
      });
    },
    updateOne: function(whatToSelect, tableOne, tableid, cb) {
      var queryString = "UPDATE ?? FROM ?? WHERE ??";
      
      console.log(queryString);
  
      connection.query(queryString, [whatToSelect, tableOne, tableid], function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        cb(result);
      });
    }
  };

module.exports = orm;