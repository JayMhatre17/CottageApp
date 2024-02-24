import React from "react";
import {
  Button,
  Label,
  TextInput,
  Textarea,
  Datepicker,
  FloatingLabel,
} from "flowbite-react";

import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
const BookingForm = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
      <form className="max-w-2xl mx-auto border p-4 bg-white rounded shadow-lg ">
        <div>
          <img src="../images/hotel_banner.png" alt="banner" />
        </div>
        <div className="flex justify-center p-2 mb-2">
          <label>
            <h2>
              <b>Room Booking Form</b>
            </h2>
          </label>
        </div>
        <div className="grid grid-flow-col justify-stretch space-x-4">
          <FloatingLabel variant="filled" label="First Name" />
          <FloatingLabel variant="filled" label="Last Name" />
        </div>
        <div className="mt-4">
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            icon={HiMail}
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div className="mt-4">
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Contact Number" />
          </div>
          <TextInput
            id="phone"
            type="tel"
            icon={FaPhoneAlt}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="noOfcustomer" value="Number of Guests" />
          <div className="grid grid-flow-col justify-stretch space-x-4">
            <FloatingLabel variant="filled" label="Adults" />
            <FloatingLabel variant="filled" label="Childrens" />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="Arrivaltime" value="Arrival Time" />
          <div className="grid grid-flow-col justify-stretch space-x-4">
            <Datepicker />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="DepaTime" value="Departure Time" />
          <div className="grid grid-flow-col justify-stretch space-x-4">
            <Datepicker />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="Request" value="Special Requests" />
          <Textarea id="Request" placeholder="Any special requests?" rows={4} />
        </div>
        <div className="flex justify-center p-4 mt-4">
          <Button gradientMonochrome="cyan">Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default BookingForm;
