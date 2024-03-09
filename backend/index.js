const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Reg");
const ReviewModel = require("./models/Review");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("Success");
      } else {
        res.json("Password is incorrect!");
      }
    } else {
      res.json("User not found!");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((Register) => res.json(Register))
    .catch((err) => res.json(err));
});

app.post("/", (req, res) => {
  ReviewModel.create(req.body)
    .then((Review11) => res.json(Review11))
    .catch((err) => res.json(err));
});

app.get("/rev", (req, res) => {
  ReviewModel.find()
    .then((Review) => res.json(Review))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
