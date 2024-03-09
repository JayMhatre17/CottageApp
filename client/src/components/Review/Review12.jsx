import React, { useEffect, useState } from "react";
import axios from "axios";
const StarRating = ({ value }) => {
  // Create an array with the length of the value
  const stars = Array.from({ length: 5 });

  return (
    <div>
      {stars.map((_, index) => (
        <span
          key={index}
          className={`text-2xl ${
            index < value ? "text-yellow-400" : "text-gray-400"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Review12 = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(4);
  const [totalUsers, setTotalUsers] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3001/rev")
      .then((user) => {
        setUsers(user.data);
        setTotalUsers(user.data.length);
      })
      .catch((err) => console.error());
  }, []);
  const handleSeeMore = () => {
    setVisibleUsers((prevVisibleUsers) => prevVisibleUsers + 4);
  };
  return (
    <>
      <div className="p-5 grid grid-cols-2 gap-5">
        {users.slice(0, visibleUsers).map((user) => {
          return (
            <div className="w-full border mr-2">
              <div className="p-2"> {user.name} </div>
              <div>
                <StarRating value={user.rating} />
              </div>
              <div className="border ">{user.data}</div>
            </div>
          );
        })}
      </div>
      {visibleUsers < totalUsers && (
        <div className="w-full border m-2 flex justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}
    </>
  );
};

export default Review12;
