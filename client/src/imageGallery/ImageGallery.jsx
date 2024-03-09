import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [images, setImages] = useState([]);
  const apiKey = "886873728211134";
  const apiSecret = "Z_4NgsD7194RqV8uPAXIYTerEI8";
  const folder = "Cottageimages";
  const fetchCloudinaryImages = async () => {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${apiKey}/resources/image/upload?folder=${folder}&api_key=${apiKey}&api_secret=${apiSecret}`
    );

    const images = response.data.resources.map(
      (resource) => resource.public_id
    );
    return images;
  };

  useEffect(() => {
    const fetchData = async () => {
      const folder = "Cottageimages"; // Replace this with your folder name
      const apiKey = "886873728211134"; // Replace this with your API key
      const apiSecret = "Z_4NgsD7194RqV8uPAXIYTerEI8"; // Replace this with your API secret

      const fetchedImages = await fetchCloudinaryImages(
        folder,
        apiKey,
        apiSecret
      );
      setImages(fetchedImages);
    };

    fetchData();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <img
          key={image}
          src={`https://res.cloudinary.com/do7olmnmx/${image}`}
          alt={image}
        />
      ))}
    </div>
  );
};

export default MyComponent;
