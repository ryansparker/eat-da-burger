var connection = require("./connection.js");


var orm = {
    selectAll: function(where, value) {
      return new Promise(function(resolve, reject) {
            var queryString = "SELECT * FROM Burgers WHERE ?? = ?";
                connection.query(queryString, [where, value], function(err, result) {
                if (err) {
                    return reject(err)
                }
                resolve(result);
            })
        })
    },
    insertOne: function(burger_name, devoured=false) {
      return new Promise(function(resolve, reject) {
        var queryString = "INSERT INTO Burgers (burger_name, devoured) VALUES (?,?);";
        connection.query(queryString, [burger_name, devoured], function(err, result) {
          if (err) {
            return reject(err)
          }
          resolve(result);
        })
      })
    },
    updateOne: function(id, burger_name, devoured=false) {
        return new Promise(function(resolve, reject) {
            var queryString = "UPDATE burgers SET burger_name = ?, devoured = ? WHERE id=?;";
            connection.query(queryString, [burger_name, devoured, id], function(err, result) {
                if (err) {
                    return reject(err)
                }
                resolve(result);
            })
        })
    }
}
  
module.exports = orm;