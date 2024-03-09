import React from "react";
import { Link } from "react-router-dom";
const Packages = () => {
  return (
    <div className="text-white font-bold">
      <div className="text-center text-zinc-700 bg-amber-100 first-line:">
        Packages
      </div>
      <div className=" bg-amber-100 text-neutral-600">
        Package Includes Following:
        <div>
          <div className="flex flex-wrap w-4/5 place-content-evenly">
            <li className="list-style-disc">2 Meals</li>
            <li>2 Tea/Coffee</li>
            <li>1 Breakfast</li>
            <li>1 Day & Night stay</li>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center">
        <img
          className="w-full h-screen relative blur-sm"
          src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
          alt="roomBg"
        ></img>
        <div className="m-4 p-5 border border-gray-100 w-4/5 rounded-lg block absolute top-5">
          Package for 2 to 3 People's
          <div className="flex flex-row w-4/5 h-1/2 place-content-around p-3">
            <div className="border-2 p-5 rounded-md">
              <div>Non/AC Rooms</div>
              <div>
                <li>1 Room</li>
                <li>Price: 1600 P.H.</li>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 rounded-md">
                <div>AC Rooms</div>
                <div>
                  <li>1 Room</li>
                  <li>Price: 1800 P.H.</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 p-5 border border-gray-100 w-4/5 rounded-lg block absolute  bottom-5">
          Package for 4+ People's
          <div className="flex flex-row w-4/5 h-1/2 space-x-10 p-2">
            <div className="border-2 p-5 rounded-md">
              <div>Non/AC Rooms</div>
              <div>
                <li>+1 Room (Depending on Number of People)</li>
                <li>Price: 1400 P.H.</li>
              </div>
            </div>
            <div>
              <div className="border-solid p-5 border-2 rounded-md">
                <div>AC Rooms</div>
                <div>
                  <li>+1 Room (Depending on Number of People)</li>
                  <li>Price: 1600 P.H.</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/booking"
        className="text-white border bg-amber-500 m-5 mt-10 p-3 fixed right-0 rounded-full top-10"
      >
        Book Now
      </Link>
    </div>
  );
};

export default Packages;
