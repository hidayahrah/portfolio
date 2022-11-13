// Imports
const express = require("express");
const app = express();
const port = 5000;

// Static Files
app.use(express.static("public"));

// Example for other olders
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.engine("html", require("ejs").renderFile);

// Set View's
app.set("views", "./views/v3");
app.set("view engine", "html");
// app.set("views", "./views/v2");
// app.set("view engine", "ejs");

// Navigation
app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/about", (req, res) => {
//   res.render("about", { text: "What about you, bitch?" });
// });

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));
