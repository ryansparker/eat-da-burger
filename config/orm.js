var connection = require("./connection.js");


var orm = {
    all: function(table, where, value) {
      return new Promise(function(resolve, reject) {
            var queryString = `SELECT * FROM ?? ${where !== undefined ? 'WHERE ?? = ?' : ''}`;
                connection.query(queryString, [table, where, value], function(err, result) {
                if (err) {
                    return reject(err)
                }
                resolve(result);
            })
        })
    },
    insert: function(table, cols, vals) {
      return new Promise(function(resolve, reject) {
        var queryString = "INSERT INTO ?? (??) VALUES (??);";
        connection.query(queryString, [cols.join(','), vals.join(',')], function(err, result) {
          if (err) {
            return reject(err)
          }
          resolve(result);
        })
      })
    },
    update: function(table, id, key, value) {
        return new Promise(function(resolve, reject) {
            var queryString = "UPDATE ?? SET ?? = ?, ?? = ? WHERE id=?;";
            connection.query(queryString, [table, key, value, id], function(err, result) {
                if (err) {
                    return reject(err)
                }
                resolve(result);
            })
        })
    }
}
  
module.exports = orm;