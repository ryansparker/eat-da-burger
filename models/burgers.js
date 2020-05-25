var orm = require("../config/orm.js");

var burger = {
    all: function() {
      return orm.all("Burgers") 
    },
    insert: function(name, devoured) {
        return orm.insert("Burgers", [name], [devoured])
    },
    update: function(id, burger_name, devoured) {
        return orm.all('Burgers', id, burger_name, devoured) 
    }
  };

module.exports = burger;