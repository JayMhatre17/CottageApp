import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";

const ReviewModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const onPointerMove = (value, index) => console.log(value, index);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/", { name, data, rating })
      .then((result) => {
        console.log(result);
        alert("Successfully sent review!!");
        setOpenModal(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Add Review</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add a Review</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-left">
                <label
                  htmlFor="exampleInputEmail1"
                  className="block text-sm font-medium text-gray-700"
                >
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="mt-1 p-2 border rounded-md w-full"
                  id="exampleInputname"
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div className="mb-3 h-10 ">
                <label
                  htmlFor="Rating1"
                  className="block text-sm font-medium text-gray-700"
                >
                  <strong>Rating</strong>
                </label>
                <Rating
                  onClick={handleRating}
                  onPointerMove={onPointerMove}
                  className="left-20 -top-20 -rotate-90"
                />
              </div>

              <div className="mb-3 text-left">
                <label
                  htmlFor="exampleInputContent1"
                  className="block text-sm font-medium text-gray-700"
                >
                  <strong>Review</strong>
                </label>
                <textarea
                  placeholder="Enter Your Review"
                  className="mt-1 p-2 border rounded-md w-full"
                  id="exampleInputContent1"
                  onChange={(event) => setData(event.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewModal;
