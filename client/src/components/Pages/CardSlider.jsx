import React, { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "RDJ",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVmVmWfVJi7OJAa_QH25SmK-nG54D9ExShXogFCQVGQjrvlEh",
  },
  {
    id: 2,
    name: "Leonardo",
    review:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
    image:
      ~"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQca59lIsX6cXLNmRMle2fcCkURB4AvtkSqh-4Do1NwxEW49fNW",
  },
  {
    id: 3,
    name: "Will smith",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 3,
    image:
      "hhttps://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbuF86tSHODHWHJRusio04zBWZHRNgFJdu-jyiWgkIbBC4-tuT",
  },
  {
    id: 4,
    name: "Rock",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 5,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrCrIk1g36PkALJCptMnO8JqHrZDIGPVQnglY5p2i2eIGycreH",
  },
  {
    id: 5,
    name: "Arnold",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxNC_jGmV1EGqxaRRYCftws6rYzsRtc5MmnGBQbJXwqoYpMrFx",
  },
];

export default function CardUserProfile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200 border-2">
        {/*  <!-- Image --> */}
        <figure className="p-6 pb-0">
          <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
            <img
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].name}
              title={reviews[currentIndex].name}
              width="80"
              height="80"
              className="max-w-full rounded-full"
            />
          </span>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-3">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              {reviews[currentIndex].name}
            </h3>
          </header>
        </div>
        {/*  <!-- Action base sized with lead icon buttons  --> */}

        <p>
          <span className="font-bold">Rating:</span>{" "}
          {reviews[currentIndex].rating}
        </p>
        <p>{reviews[currentIndex].review}</p>
      </div>
    </>
  );
}
