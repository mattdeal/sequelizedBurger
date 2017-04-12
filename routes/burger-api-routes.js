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
    models.Burger.update({devoured: true}, {
      where: {
        id: req.body.id
      }
    }).then(function(updatedBurger) {
        res.json(updatedBurger);
    });
  });
}; //end module.exports