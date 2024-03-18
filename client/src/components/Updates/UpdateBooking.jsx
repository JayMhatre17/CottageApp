import { useParams } from "react-router-dom";
import React, { useState } from "react";
function UpdateBooking() {
  const { id } = useParams();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [room, setRoom] = useState("");
  const [noa, setNoa] = useState("");
  const [noc, setNoc] = useState("");
  const [arrtime, setArrtime] = useState("");
  const [deptime, setDeptime] = useState("");
  const [specialReq, setSpecialReq] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const booking = {
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
    };

    await fetch(`http://localhost:3001/bookings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    });

    alert("Booking details updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={fname}
          onChange={(event) => setFname(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lname}
          onChange={(event) => setLname(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <label>
        Room:
        <input
          type="text"
          value={room}
          onChange={(event) => setRoom(event.target.value)}
        />
      </label>
      <label>
        Number of Adults:
        <input
          type="number"
          value={noa}
          onChange={(event) => setNoa(event.target.value)}
        />
      </label>
      <label>
        Number of Children:
        <input
          type="number"
          value={noc}
          onChange={(event) => setNoc(event.target.value)}
        />
      </label>
      <label>
        Arrival Time:
        <input
          type="time"
          value={arrtime}
          onChange={(event) => setArrtime(event.target.value)}
        />
      </label>
      <label>
        Departure Time:
        <input
          type="time"
          value={deptime}
          onChange={(event) => setDeptime(event.target.value)}
        />
      </label>
      <label>
        Special Requests:
        <textarea
          value={specialReq}
          onChange={(event) => setSpecialReq(event.target.value)}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateBooking;
