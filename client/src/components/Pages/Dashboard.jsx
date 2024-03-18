import React, { useEffect, useState } from "react";
import axios from "axios";
import { Label } from "flowbite-react";
import { Link } from "react-router-dom";
import BarChart from "../Chart/BarrChart.jsx";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/dash")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3001/book")
      .then((booking) => setBooking(booking.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" p-2 m-2 ">
      {/* <div>
        <BarChart />
      </div> */}

      <Label value="Login User Info: "></Label>
      <table className="table-fixed w-1/2 text-center">
        <thead className="bg-sky-200">
          <tr>
            <th className="border-gray-700 border-2">Name</th>
            <th className="border-gray-700 border-2">Email</th>
          </tr>
        </thead>
        <tbody className="border-gray-700 border-2 ">
          {users.map((user) => {
            return (
              <tr>
                <td className="border-gray-700 border-2">{user.name}</td>
                <td className="border-gray-700 border-2">{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <div className="flex pl-6 pt-5 pr-2 top-10 justify-between">
          <Label value="Booking Info: "></Label>
          <Link to={"/booking"} className="border-2 rounded-lg bg-sky-300">
            +Add Booking
          </Link>
        </div>
        <table className="table-fixed text-center">
          <thead className="bg-sky-200">
            <tr>
              <th className="border-gray-700 border-2">Name</th>
              <th className="border-gray-700 border-2">Email</th>
              <th className="border-gray-700 border-2">Phone No.</th>
              <th className="border-gray-700 border-2">Arrival Date</th>
              <th className="border-gray-700 border-2">Depature Date</th>
              <th className="border-gray-700 border-2">No. of Adult</th>
              <th className="border-gray-700 border-2">No. of Children</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="border-gray-700 border-2 ">
            {booking.map((user) => {
              return (
                <tr>
                  <td className="border-gray-700 border-2">
                    {user.fname} {user.lname}
                  </td>
                  <td className="border-gray-700 border-2">{user.email}</td>
                  <td className="border-gray-700 border-2">{user.phone}</td>
                  <td className="border-gray-700 border-2">{user.arrtime}</td>
                  <td className="border-gray-700 border-2">{user.deptime}</td>
                  <td className="border-gray-700 border-2">{user.noa}</td>
                  <td className="border-gray-700 border-2">{user.noc}</td>
                  <td>
                    <Link to={`/bookings/${user._id}`}>
                      <button>Update</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
