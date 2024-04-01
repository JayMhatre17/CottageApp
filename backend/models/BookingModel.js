import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    numberOfAdults: { type: Number, required: true },
    numberOfChildrens: { type: Number, required: true },
    checkIn: { type: String, required: true },
    checkOut: { type: String, required: true },
    specialRequest: { type: String, default: 'No Request' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);
const Booking = mongoose.model('Bookings', bookingSchema);
export default Booking;
