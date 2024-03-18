import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Label,
  TextInput,
  Textarea,
  Datepicker,
  FloatingLabel,
  Select,
} from "flowbite-react";
// import { Dropdown } from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
// import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [room, setRoom] = useState("");
  const [noa, setNoa] = useState("");
  const [noc, setNoc] = useState("");
  const [arrtime, setArrTime] = useState(new Date());
  const [deptime, setDepTime] = useState(new Date());
  const [specialReq, setSpecialReq] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    console.log(deptime);
    console.log(arrtime);
    console.log(room);
  });
  const notify = () => {
    toast.success("Your Room has been Booked.");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send a POST request to Formspree with the form data
    const formData = new FormData();
    formData.append("First name", fname);
    formData.append("Last name", lname);
    formData.append("email", email);
    formData.append("Phone Number", phone);
    formData.append("Room type", room);
    formData.append("Number of adults", noa);
    formData.append("Number of children", noc);
    formData.append("Arrival time", arrtime);
    formData.append("Depature time", deptime);
    formData.append("message", specialReq);
    await axios.post("https://formspree.io/f/mgegzzez", formData);
    toast("Your Room has been Booked.");
    // Optionally, you can also send the same data to your own backend using Axios
    await axios.post("http://localhost:3001/booking", {
      fname,
      lname,
      email,
      phone,
      room,
      noa,
      noc,
      arrtime,
      deptime,
      specialReq,
    });
  };
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 7);

  // Set maximum date to 2 months from today
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);
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
              onChange={(e) => setFname(e.target.value)}
            />
            {/* <ValidationError
              prefix="FirstName"
              field="firstname"
              errors={state.errors}
            /> */}
            <FloatingLabel
              variant="filled"
              label="Last Name"
              id="lastname"
              name="lastname"
              onChange={(e) => setLname(e.target.value)}
            />
            {/* <ValidationError
              prefix="LastName"
              field="lastname"
              errors={state.errors}
            /> */}
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            /> */}
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
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {/* <ValidationError
              prefix="Phone number"
              field="phone"
              errors={state.errors}
            /> */}
          </div>
          <div className="mt-4 text-black bg-white">
            <Label value="Select Room Type"></Label>
            <h1>{room}</h1>
            <Select value={room} onChange={(e) => setRoom(e.target.value)}>
              <option></option>
              <option>A/C</option>
              <option>Non A/C</option>
            </Select>
            {/* <Dropdown
              id="room"
              label="Room Type"
              placement="right-start"
              onChange={(e) => setRoom(e.target.value)}
              value={room}
              inline
            >
              <Dropdown.Item value="ac">A/C Room</Dropdown.Item>
              <Dropdown.Item value="non-ac">Non A/C Room</Dropdown.Item>
            </Dropdown> */}
            {/* <ValidationError
              prefix="Room Type"
              field="room"
              errors={state.errors}
            /> */}
          </div>
          <div className="mt-4">
            <Label htmlFor="noOfcustomer" value="Number of Guests" />
            <div className="grid grid-flow-col justify-stretch space-x-4">
              <FloatingLabel
                variant="filled"
                label="Adults"
                id="noa"
                name="noa"
                onChange={(e) => setNoa(e.target.value)}
              />
              {/* <ValidationError
                prefix="Number of Adults"
                field="noa"
                errors={state.errors}
              /> */}
              <FloatingLabel
                variant="filled"
                label="Childrens"
                id="noc"
                name="noc"
                onChange={(e) => setNoc(e.target.value)}
              />
              {/* <ValidationError
                prefix="Number of Childrens"
                field="noc"
                errors={state.errors}
              /> */}
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-flow-col space-x-4">
              <div className="grid grid-flow-row ">
                <Label htmlFor="Arrivaltime" value="Arrival Time" />

                <Datepicker
                  id="arrdate"
                  name="arrdate"
                  onChange={(e) => setArrTime(e.target)}
                  value={arrtime}
                  minDate={minDate}
                  maxDate={maxDate}
                />
                {/* <ValidationError
                  prefix="arrdate"
                  field="arrdate"
                  errors={state.errors}
                /> */}
              </div>
              <div className="grid grid-flow-row ">
                <Label htmlFor="DepaTime" value="Departure Time" />
                <Datepicker
                  id="depdate"
                  name="depdate"
                  onChange={(e) => setDepTime(e.target)}
                  value={deptime}
                  minDate={minDate}
                  maxDate={maxDate}
                />
                {/* <ValidationError
                  prefix="depdate"
                  field="depdate"
                  errors={state.errors}
                /> */}
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
              onChange={(e) => setSpecialReq(e.target.value)}
            />
            {/* <ValidationError
              prefix="Special Request"
              field="request"
              errors={state.errors}
            /> */}
          </div>
          <div className="flex justify-center p-4 mt-4">
            <Button
              gradientMonochrome="cyan"
              type="submit"
              onClick={notify}
              // disabled={state.submitting}
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
