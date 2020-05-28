var connection = require("./connection.js");

const serialize = obj => Object.entries(obj).map(([k, v]) =>
  `\`${k}\`=${typeof v === 'boolean' ? v : `'${v}'`}`).join(',')

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
    insert: function(table, object) {
      console.log(object)
      const sets = serialize(object)
      console.log(sets)

      return new Promise(function(resolve, reject) {
        const queryString = `INSERT ?? SET ${sets};`;
        connection.query(queryString, [table], function(err, result) {
          if (err) {
              return reject(err)
          }
          resolve(result);
      })
      })
    },
    update: function(table, id, object) {
        const sets = serialize(object)

        return new Promise(function(resolve, reject) {
          const queryString = `UPDATE ?? SET ${sets} WHERE id=?;`;
            connection.query(queryString, [table, id], function(err, result) {
                if (err) {
                    return reject(err)
                }
                resolve(result);
            })
        })
    }
}
  
module.exports = orm;