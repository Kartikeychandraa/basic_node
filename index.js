var express = require("express");
var body = require("body-parser");
var app = express();
//mongoose import
var mongoose = require("mongoose");

const UserModel = require("./model/user");

mongoose.connect(
  "mongodb+srv://Username:password@cluster0-xwnrl.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
//----------------
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
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
//mongoose 
app.get("/input", async (req, res) => {
  const userr = new UserModel({
    name: "a+b",
    email: "c",
    password: "d",
  });
  try {
    await userr.save();
    res.send(userr);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/output", async (req, res) => {
  const data = await UserModel.find({});
  try {
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/delete", async (req, res) => {
  const data = await UserModel.findOneAndRemove({name: "kartikey",
    email: "xom",
    password: "lo"});
  try {
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});
//mongoose basic ends







app.listen(process.env.PORT || 3000);
console.log("SERVER RUNNING");
