import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import expressAsyncHandler from 'express-async-handler';
import userRouter from './Routes/UserRoutes.js';

const app = express();

dotenv.config();
mongoose
  .connect(
    'mongodb+srv://cottageuser:soham2002@cluster0.uhf4yom.mongodb.net/?retryWrites=true&w=majority'
  )
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
// app.use('/seed', seedRouter);

app.get('/', (req, res) => res.send('server is active!'));

const port = 5000;
app.listen(port, () => {
  console.log(`Serve at: http://localhost:${port}`);
});
