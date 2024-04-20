import React, { useState, useContext, useReducer, useEffect } from 'react';
import Axios from 'axios';
import {
  Label,
  TextInput,
  Textarea,
  Datepicker,
  FloatingLabel,
  Radio,
  Button,
  Spinner,
} from 'flowbite-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { Store } from '../Store';
import { getError } from '../utils';
import { useNavigate } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'BOOKING_REQUEST':
      return { ...state, loading: true };
    case 'BOOKING_SUCCESS':
      return { ...state, loading: false };
    case 'BOOKING_FAILED':
      return { ...state, loading: false };
    default:
      return state;
  }
};
const BookingForm = () => {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login?redirect=/booking');
    }
  }, [userInfo, navigate]);

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const [firstName, setFirstName] = useState(
    userInfo ? userInfo.firstName : ''
  );
  const [lastName, setLastName] = useState(userInfo ? userInfo.lastName : '');
  const [email, setEmail] = useState(userInfo ? userInfo.email : '');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('');
  const [numberOfAdults, setNumberOfAdults] = useState(null);
  const [numberOfChildrens, setNumberOfChildrens] = useState(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [specialRequest, setSpecialRequest] = useState();

  // Number of Guest validation
  const numberOfAdultsChange = (e) => {
    const value = e.target.value;
    if (value > 30) {
      toast.error('Maximum 30 adults can be selected!', {
        position: 'top-center',
      });
      return setNumberOfAdults(30);
    } else if (value < 0) {
      toast.error('Minimum 0 adults can be selected!', {
        position: 'top-center',
      });
      return setNumberOfAdults(0);
    } else {
      return setNumberOfAdults(value);
    }
  };

  const numberOfChilrenChange = (e) => {
    const value = e.target.value;
    if (value > 30) {
      toast.error('Maximum 30 childrens can be selected!', {
        position: 'top-center',
      });
      return setNumberOfChildrens(30);
    } else if (value < 0) {
      toast.error('Minimum 0 childrens can be selected!', {
        position: 'top-center',
      });
      return setNumberOfChildrens(0);
    } else {
      return setNumberOfChildrens(value);
    }
  };

  // Check-In and Check-Out Validation
  const today = new Date();
  const oneWeekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const twoMonthsFromToday = new Date(
    today.getFullYear(),
    today.getMonth() + 2,
    today.getDate()
  );

  // Date Formatter
  function formatDate(date) {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = date.getDay();
    const selectedDate = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${dayNames[day]} ${selectedDate} ${monthNames[monthIndex]} ${year}`;
  }

  const checkInDateChange = (date) => {
    const formatCheckInDate = formatDate(date);
    setCheckIn(formatCheckInDate);
  };

  const checkOutDateChange = (date) => {
    const formatCheckOutDate = formatDate(date);
    setCheckOut(formatCheckOutDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'BOOKING_REQUEST' });
      await Axios.post(
        '/api/booking',
        {
          firstName,
          lastName,
          email,
          phone,
          roomType,
          numberOfAdults,
          numberOfChildrens,
          checkIn,
          checkOut,
          specialRequest,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: 'BOOKING_SUCCESS' });
      toast.success('Your Room has been Booked.', { position: 'top-center' });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'BOOKING_FAILED' });
      toast.error(getError(err), { position: 'top-center' });
    }
  };

  return (
    <>
      <div className="p-4">
        <form className="max-w-2xl mx-auto border p-4 bg-white rounded shadow-lg ">
          <div>
            <img src="../images/booking/formBanner.png" alt="banner" />
          </div>
          <div className="flex justify-center my-4 font-bold font-serif">
            Room Booking Form
          </div>
          <div className="grid grid-flow-col justify-stretch space-x-4">
            <FloatingLabel
              variant="filled"
              label="First Name"
              id="firstName"
              name="firstName"
              value={firstName}
              className="capitalize"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <FloatingLabel
              variant="filled"
              label="Last Name"
              id="lastName"
              name="lastName"
              className="capitalize"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <div className="mb-2 block">
              <Label htmlFor="Email" value="Email Address" />
            </div>
            <TextInput
              id="Email"
              type="email"
              icon={HiMail}
              name="Email"
              placeholder="example@mail.com"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
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
              autoComplete="tel"
              maxLength={10}
              icon={FaPhoneAlt}
              name="phone"
              value={phone}
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mt-4 text-black bg-white">
            <fieldset className="flex max-w-md flex-col gap-4">
              <legend className="mb-4 font-medium">Select Room Type</legend>
              <div className="flex flex-row gap-2">
                <div className="flex items-center gap-2">
                  <Radio
                    id="AC"
                    name="roomType"
                    value="AC"
                    onChange={(e) => {
                      setRoomType(e.target.value);
                    }}
                    required
                  />
                  <Label htmlFor="AC">AC</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="NonAC"
                    name="roomType"
                    value="Non AC"
                    required
                    onChange={(e) => {
                      setRoomType(e.target.value);
                    }}
                  />
                  <Label htmlFor="NonAC">Non AC</Label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="mt-4">
            <div>Number of Guest</div>
            <div className="grid grid-flow-col justify-stretch space-x-4">
              <FloatingLabel
                variant="filled"
                type="number"
                min={0}
                max={30}
                label="Adults"
                id="numberOfAdults"
                name="numberOfAdults"
                required
                value={numberOfAdults}
                onChange={numberOfAdultsChange}
              />
              <FloatingLabel
                type="number"
                min={0}
                max={30}
                variant="filled"
                label="Childrens"
                id="numberOfChildrens"
                name="numberOfChildrens"
                required
                value={numberOfChildrens}
                onChange={numberOfChilrenChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-flow-col space-x-4">
              <div className="grid grid-flow-row ">
                <Label htmlFor="checkIn" value="Check-In Date" />
                <Datepicker
                  id="checkIn"
                  name="checkIn"
                  value={checkIn}
                  onSelectedDateChanged={checkInDateChange}
                  minDate={oneWeekFromToday}
                  maxDate={twoMonthsFromToday}
                  placeholder="Check-In Date"
                />
              </div>
              <div className="grid grid-flow-row ">
                <Label htmlFor="checkOut" value="Check-Out Date" />
                <Datepicker
                  id="checkOut"
                  name="checkOut"
                  onSelectedDateChanged={checkOutDateChange}
                  value={checkOut}
                  minDate={oneWeekFromToday}
                  maxDate={twoMonthsFromToday}
                  placeholder="Check-Out Date"
                />
              </div>
            </div>

            <div className="text-sm font-medium mt-1 text-neutral-600">
              You can book up to two months in advance, starting from one week
              before your desired date.
            </div>
          </div>

          <div className="mt-2">
            <Label
              htmlFor="specialRequest"
              value="Special Requests (Optional)"
            />
            <Textarea
              id="specialRequest"
              name="reqspecialRequestuest"
              className="p-2"
              placeholder="Any special requests?"
              rows={4}
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
            />
          </div>
          <div className="flex justify-center p-4 mt-4">
            <Button
              color="blue"
              pill
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className="px-6"
            >
              {loading ? (
                <>
                  {' '}
                  <Spinner
                    aria-label="Alternate spinner button example"
                    size="sm"
                  />
                  <span className="pl-3">Submit...</span>
                </>
              ) : (
                'Submit'
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default BookingForm;
