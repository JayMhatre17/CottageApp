export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

// Cloudinary Credentials
export const CLOUDINARY_CLOUD_NAME = "do7olmnmx";
export const CLOUDINARY_UPLOAD_PRESET = "myhcw6ui";
