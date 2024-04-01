import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';
import { Button, Modal, Spinner, Table } from 'flowbite-react';
import { PiTrashDuotone } from 'react-icons/pi';
import { FaTrashCan } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, bookings: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, error: action.payload, loading: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true, successDelete: false };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      break;
  }
};

export default function BookingListScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, bookings, loadingDelete, successDelete }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const [openDetailsModal, setOpenDetailsModal] = useState(0);
  const [openDeleteModal, setOpenDeleteModal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get('/api/booking', {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [userInfo, successDelete]);

  const deleteHandler = async (booking) => {
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      await axios.delete(`/api/booking/${booking._id}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      toast.success('Booking deleted successfully.');
      dispatch({ type: 'DELETE_SUCCESS' });
      setOpenDeleteModal(0);
    } catch (error) {
      toast.error(getError(error));
      dispatch({
        type: 'DELETE_FAIL',
      });
    }
  };

  return (
    <div>
      <div className="fs-3 font-medium text-center my-4 text-2xl">Bookings</div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="overflow-x-auto lg:max-w-4xl xl:max-w-6xl mx-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>User</Table.HeadCell>
              <Table.HeadCell>Booking ID</Table.HeadCell>
              <Table.HeadCell>Check-In</Table.HeadCell>
              <Table.HeadCell>Check-Out</Table.HeadCell>
              <Table.HeadCell>Booking Details</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {bookings.map((booking, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {booking.firstName + ' ' + booking.lastName}
                  </Table.Cell>
                  <Table.Cell> {booking._id}</Table.Cell>
                  <Table.Cell>{booking.checkIn}</Table.Cell>
                  <Table.Cell>{booking.checkOut}</Table.Cell>
                  <Table.Cell>
                    <>
                      <Button
                        color="light"
                        className="focus:ring-0"
                        onClick={() => setOpenDetailsModal(booking._id)}
                      >
                        Details
                      </Button>
                      <Modal
                        dismissible
                        show={openDetailsModal === booking._id}
                        onClose={() => setOpenDetailsModal(0)}
                      >
                        <Modal.Header>Booking Details</Modal.Header>
                        <Modal.Body className="font-bold font-sans">
                          <div id="name" className="mb-3">
                            Name:{' '}
                            <span className="font-medium capitalize">
                              {booking.firstName + ' ' + booking.lastName}
                            </span>
                          </div>
                          <div id="email" className="my-3">
                            Email:{' '}
                            <span className="font-medium">{booking.email}</span>
                          </div>
                          <div id="phoneNumber" className="my-3">
                            Phone Number:{' '}
                            <span className="font-medium">{booking.phone}</span>
                          </div>
                          <div className="flex flex-row gap-3">
                            <div id="checkIn">
                              Check-In:{' '}
                              <span className="font-medium">
                                {booking.checkIn}
                              </span>
                            </div>
                            <div id="checkOut">
                              Check-Out:{' '}
                              <span className="font-medium">
                                {booking.checkOut}
                              </span>
                            </div>
                          </div>
                          <div id="numberOfGuests" className="my-3 text-sm">
                            Number Of Guests
                            <div className="flex flex-row gap-2">
                              <div>
                                Adults:{' '}
                                <span className="font-medium">
                                  {booking.numberOfAdults}
                                </span>
                              </div>
                              <div>
                                Childrens:{' '}
                                <span className="font-medium">
                                  {booking.numberOfChildrens}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            Special Request:{' '}
                            <p className="font-medium inline-block">
                              {booking.specialRequest}
                            </p>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color="failure"
                      className="flex flex-row justify-between"
                      onClick={() => {
                        setOpenDeleteModal(booking._id);
                      }}
                    >
                      {loadingDelete ? (
                        <>
                          {' '}
                          <Spinner
                            aria-label="Alternate spinner button example"
                            size="sm"
                          />
                          <span className="pl-3">Deleting...</span>
                        </>
                      ) : (
                        <>
                          <FaTrashCan className="me-1" />
                          <div id="text">Delete</div>
                        </>
                      )}
                    </Button>
                    <Modal
                      show={openDeleteModal === booking._id}
                      size="md"
                      onClose={() => setOpenDeleteModal(0)}
                      popup
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <PiTrashDuotone className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this booking?{' '}
                            <span className="text-sm">
                              <b>Booking ID:</b> {booking._id}
                            </span>
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button
                              color="failure"
                              onClick={() => {
                                deleteHandler(booking);
                              }}
                              disabled={loadingDelete}
                            >
                              {"Yes, I'm sure"}
                            </Button>
                            <Button
                              color="gray"
                              onClick={() => setOpenDeleteModal(0)}
                            >
                              No, cancel
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </div>
  );
}
