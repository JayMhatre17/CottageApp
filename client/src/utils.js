export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

// Cloudinary Credentials
export const CLOUDINARY_CLOUD_NAME = 'dazvnvkca';
export const CLOUDINARY_UPLOAD_PRESET = 'pgu2ly6f';
