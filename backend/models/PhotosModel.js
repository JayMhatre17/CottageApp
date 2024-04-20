import mongoose from 'mongoose';

const photosSchema = new mongoose.Schema(
  {
    path: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Photos = mongoose.model('Photos', photosSchema);
export default Photos;
