import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './Routes/UserRoutes.js';
import bookingRouter from './Routes/BookingRoutes.js';

const app = express();

dotenv.config();
mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRouter);
app.use('/api/booking', bookingRouter);

app.get('/', (req, res) => res.send('server is active!'));

const port = 5000;
app.listen(port, () => {
  console.log(`Serve at: http://localhost:${port}`);
});
