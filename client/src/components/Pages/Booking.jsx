import React, { useState } from "react";
import "./Booking.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    roomType: "",
    indate: "",
    outdate: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send form data to the server
  };

  const roomTypes = ["A/C", "Non A/C"];

  return (
    <div className="booking-form">
      <h2>Book a Room</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="mobile">Mobile No. :</label>
        <input
          type="number"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <label htmlFor="roomType">Room Type:</label>
        <select
          id="roomType"
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          {roomTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <label htmlFor="indate">Date:</label>
        <input
          type="date"
          id="indate"
          name="indate"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="outdate">Date:</label>
        <input
          type="date"
          id="outdate"
          name="outdate"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
