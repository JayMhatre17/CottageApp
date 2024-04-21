import express from 'express';
import Booking from '../models/BookingModel.js';
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../utils.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import Handlebars from 'handlebars';

dotenv.config();
const bookingRouter = express.Router();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

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

    const emailHTML = fs.readFileSync('././emailFormat.hbs', 'utf8');
    const compiledTemplate = Handlebars.compile(emailHTML);

    const emailData = {
      name: `${req.body.firstName + ' ' + req.body.lastName}`,
      phone: req.body.phone,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      numberOfChildrens: req.body.numberOfChildrens,
      numberOfAdults: req.body.numberOfAdults,
      specialRequest: req.body.specialRequest,
    };

    const htmlContent = compiledTemplate(emailData);

    await transporter.sendMail({
      from: '"Jay Prabha" <jayprabha@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: 'Room Booking Confirmation', // Subject line
      text: `${
        req.body.firstName + ' ' + req.body.lastName
      } your room has been booked.`, // plain text body
      html: htmlContent,
    });

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
