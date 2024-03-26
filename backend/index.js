// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const EmployeeModel = require("./models/Reg");
// const ReviewModel = require("./models/Review");
// const BookingModel = require("./models/Booking");
// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://localhost:27017/test");

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   EmployeeModel.findOne({ email: email }).then((user) => {
//     if (user) {
//       if (user.password == password) {
//         res.json("Success");
//       } else {
//         res.json("Password is incorrect!");
//       }
//     } else {
//       res.json("User not found!");
//     }
//   });
// });

// app.post("/register", (req, res) => {
//   EmployeeModel.create(req.body)
//     .then((Register) => res.json(Register))
//     .catch((err) => res.json(err));
// });

// app.post("/booking", (req, res) => {
//   BookingModel.create(req.body)
//     .then((book) => res.json(book))
//     .catch((err) => res.json(err));
// });
// app.post("/", (req, res) => {
//   ReviewModel.create(req.body)
//     .then((Review11) => res.json(Review11))
//     .catch((err) => res.json(err));
// });

// app.get("/rev", (req, res) => {
//   ReviewModel.find()
//     .then((Review) => res.json(Review))
//     .catch((err) => res.json(err));
// });
// //dashboard
// app.get("/dash", (req, res) => {
//   EmployeeModel.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// });

// app.get("/book", (req, res) => {
//   BookingModel.find()
//     .then((booking) => res.json(booking))
//     .catch((err) => res.json(err));
// });

// app.put("/bookings/:id", async (req, res) => {
//   const { id } = req.params;
//   const {
//     fname,
//     lname,
//     email,
//     phone,
//     room,
//     noa,
//     noc,
//     arrtime,
//     deptime,
//     specialReq,
//   } = req.body;

//   try {
//     const result = await BookingModel.findOneAndUpdate(
//       { _id: id },
//       {
//         $set: {
//           fname,
//           lname,
//           email,
//           phone,
//           room,
//           noa,
//           noc,
//           arrtime,
//           deptime,
//           specialReq,
//         },
//       }
//     );

//     if (result.matchedCount === 1) {
//       res
//         .status(200)
//         .json({ message: "Booking details updated successfully!" });
//     } else {
//       res.status(404).json({ message: "Booking not found." });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error updating booking details." });
//   }
// });

// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });
