//Requiring models
var models = require("../models");

// Routes
module.exports = function(app) {
  app.post("/api/burger", function(req, res) {
    models.Burger.create({
      burger_name: req.body.name,
      devoured: false
    }).then(function(newBurger) {
      res.redirect('/');
    });
  });//end app.post

  app.put('/api/burger', function(req, res) {
    models.Burger.update({
        //todo: where and values
    }).then(function(updatedBurger) {
        res.redirect('/');
    });
  });
}; //end module.exports