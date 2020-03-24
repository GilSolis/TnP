//Server.js - This file is the initial starting point for the Node/Express server.
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sets public directory
app.use(express.static("public"));

//routes
require("./routes/prayers.js")(app);

app.listen(PORT, function() {
  console.log("App is listening on PORT" + PORT);
});
