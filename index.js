var express = require("express");
var body = require("body-parser");
var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());
var ejs = require("ejs");
app.get("/", function(req, res) {
  res.render("index");
});

app.post("/submit", (req, res) => {
  var a = req.body.name;
  var b = req.body.name1;
  if (a == "n" && b == "nn") {
    app.get("/t", (req, res) => {
      res.end("asd");
    });
    res.redirect("/t");
  }
  console.log(a);
  console.log(b);
});

app.listen(process.env.PORT || 3000);
console.log("SERVER RUNNING");
