const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: String,
  room: String,
  noa: String,
  noc: String,
  arrtime: Date,
  deptime: Date,
  specialReq: String,
});

const BookingModel = mongoose.model("bookings", BookingSchema);
module.exports = BookingModel;
