import axios from "axios";
const apiKey = 886873728211134;
const apiSecret = Z_4NgsD7194RqV8uPAXIYTerEI8;
const fetchCloudinaryImages = async (Cottageimages, apiKey, apiSecret) => {
  const response = await axios.get(
    `https://api.cloudinary.com/v1_1/${apiKey}/resources/image/upload?folder=${folder}&api_key=${apiKey}&api_secret=${apiSecret}`
  );

  const images = response.data.resources.map((resource) => resource.public_id);
  return images;
};
