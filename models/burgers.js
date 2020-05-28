var orm = require("../config/orm.js");

var burger = {
    all: function() {
      return orm.all("burgers") 
    },
    insert: function(object) {
        return orm.insert("burgers", object)
    },
    update: function(id, object) {
        return orm.update("burgers", id, object) 
    }
  };

module.exports = burger;