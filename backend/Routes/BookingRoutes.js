import express from 'express';
import Booking from '../models/BookingModel.js';
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../utils.js';

const bookingRouter = express.Router();

bookingRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newBooking = new Booking({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      numberOfAdults: req.body.numberOfAdults,
      numberOfChildrens: req.body.numberOfChildrens,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      specialRequest: req.body.specialRequest,
      user: req.user._id,
    });
    const booking = await newBooking.save();
    res.status(201).send({ message: 'Your Room has been Booked.', booking });
  })
);

bookingRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const bookings = await Booking.find().populate('user', 'firstName');
    res.send(bookings);
  })
);

bookingRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      await booking.deleteOne();
      res.send({ message: 'Booking Deleted' });
    } else {
      res.status(404).send({ message: 'Booking Not Found' });
    }
  })
);

export default bookingRouter;
