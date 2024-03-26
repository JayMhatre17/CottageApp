import { Link } from 'react-router-dom';
// import axios from "axios";
const BookingDetails = ({ booking }) => {
  // const [booking, setBooking] = useState();
  // axios
  //   .get("http://localhost:3001/bookings/{i}")
  //   .then((booking) => setBooking(booking.data))
  //   .catch((err) => console.log(err));
  return (
    <div>
      <h2>
        {booking.fname} {booking.lname}
      </h2>
      <p>Email: {booking.email}</p>
      <p>Phone: {booking.phone}</p>
      <p>Room: {booking.room}</p>
      <p>Number of Adults: {booking.noa}</p>
      <p>Number of Children: {booking.noc}</p>
      <p>Arrival Time: {booking.arrtime}</p>
      <p>Departure Time: {booking.deptime}</p>
      <p>Special Requests: {booking.specialReq}</p>
      <Link to={`/bookings/${booking._id}/update`}>
        <button>Update</button>
      </Link>
    </div>
  );
};

export default BookingDetails;
