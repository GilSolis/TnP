var Prayer = require("../models/prayers.js");

//routes
module.exports = function(app) {
  //get all prayers
  app.get("/api/all", function(req, res) {
    Prayer.findAll({
      limit: parseInt(req.query.limit) || 10,
      offset: parseInt(req.query.offset) || 0
    }).then(function(results) {
      res.json(results);
    });
  });

  //Add a prayer
  app.post("/api/new", function(req, res) {
    Prayer.create(req.body).then(function(results) {
      //   console.log(results);
      res.end();
    });
  });
};
