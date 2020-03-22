var Prayer = require("../models/prayers.js");

//routes
module.exports = function(app) {
  //get all prayers
  app.get("/api/all", function(req, res) {
    Prayer.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  //Add a prayer
  app.post("/api/new", function(req, res) {
    Prayer.create({
      Name: req.body.name,
      Location: req.body.location,
      Thoughts: req.body.prayer
    }).then(function(results) {
      //   console.log(results);
      res.end();
    });
  });
};
