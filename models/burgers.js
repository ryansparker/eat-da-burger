var orm = require("../config/orm.js");

var burger = {
    all: function() {
      return orm.all("Burgers") 
    },
    insert: function(object) {
        return orm.insert("Burgers", object)
    },
    update: function(id, object) {
        return orm.update('Burgers', id, object) 
    }
  };

module.exports = burger;