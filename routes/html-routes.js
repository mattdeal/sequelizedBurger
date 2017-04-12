//Dependencies
var path = require("path");
var models = require("../models");

//Routes
module.exports = function(app) {
  app.get("/", function(req, res) {
    models.Burger.findAll({}).then(function(modelsBurger) {
        res.render("burgers", {burgers: modelsBurger});
    });
  }); 
};//end module.exports