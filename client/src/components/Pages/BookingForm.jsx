import React, { useEffect } from "react";
import {
  Button,
  Label,
  TextInput,
  Textarea,
  Datepicker,
  FloatingLabel,
} from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [state, handleSubmit] = useForm("xrgnkrwv");
  const Navigate = useNavigate();
  const notify = () => {
    toast.success("Your Room has been Booked.");
  };
  useEffect(() => {
    const mailConfirmation = () => {
      if (state.succeeded) {
        Navigate("/");
        return toast("Your Room has been Booked.");
      }
    };

    mailConfirmation();
  });

  return (
    <>
      <ToastContainer />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 font-bold">
        <form
          className="max-w-2xl mx-auto border p-4 bg-white rounded shadow-lg "
          onSubmit={handleSubmit}
        >
          <div>
            <img src="../images/hotel-banner.png" alt="banner" />
          </div>
          <div className="flex justify-center p-2 mb-2">
            <label>
              <h2>
                <b>Room Booking Form</b>
              </h2>
            </label>
          </div>
          <div className="grid grid-flow-col justify-stretch space-x-4">
            <FloatingLabel
              variant="filled"
              label="First Name"
              id="firstname"
              name="firstname"
            />
            <ValidationError
              prefix="FirstName"
              field="firstname"
              errors={state.errors}
            />
            <FloatingLabel
              variant="filled"
              label="Last Name"
              id="lastname"
              name="lastname"
            />
            <ValidationError
              prefix="LastName"
              field="lastname"
              errors={state.errors}
            />
          </div>
          <div className="mt-4">
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              icon={HiMail}
              name="email"
              placeholder="name@gmail.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
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
              name="phone"
              placeholder="Enter your phone number"
              required
            />
            <ValidationError
              prefix="Phone number"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className="mt-4 text-black bg-white">
            <Dropdown
              id="room"
              label="Room Type"
              placement="right-start"
              inline
            >
              <Dropdown.Item>A/C Room</Dropdown.Item>
              <Dropdown.Item>Non A/C Room</Dropdown.Item>
            </Dropdown>
            <ValidationError
              prefix="Room Type"
              field="room"
              errors={state.errors}
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="noOfcustomer" value="Number of Guests" />
            <div className="grid grid-flow-col justify-stretch space-x-4">
              <FloatingLabel
                variant="filled"
                label="Adults"
                id="noa"
                name="noa"
              />
              <ValidationError
                prefix="Number of Adults"
                field="noa"
                errors={state.errors}
              />
              <FloatingLabel
                variant="filled"
                label="Childrens"
                id="noc"
                name="noc"
              />
              <ValidationError
                prefix="Number of Childrens"
                field="noc"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-flow-col space-x-4">
              <div className="grid grid-flow-row ">
                <Label htmlFor="Arrivaltime" value="Arrival Time" />

                <Datepicker id="arrdate" name="arrdate" />
                <ValidationError
                  prefix="arrdate"
                  field="arrdate"
                  errors={state.errors}
                />
              </div>
              <div className="grid grid-flow-row ">
                <Label htmlFor="DepaTime" value="Departure Time" />
                <Datepicker id="depdate" name="depdate" />
                <ValidationError
                  prefix="depdate"
                  field="depdate"
                  errors={state.errors}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Label htmlFor="Request" value="Special Requests" />
            <Textarea
              id="request"
              placeholder="Any special requests?"
              rows={4}
              name="request"
            />
            <ValidationError
              prefix="Special Request"
              field="request"
              errors={state.errors}
            />
          </div>
          <div className="flex justify-center p-4 mt-4">
            <Button
              gradientMonochrome="cyan"
              type="submit"
              onClick={notify}
              disabled={state.submitting}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default BookingForm;
