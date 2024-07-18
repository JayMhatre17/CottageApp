import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routes/UserRoutes.js";
import bookingRouter from "./Routes/BookingRoutes.js";
import photosRouter from "./Routes/PhotosRoutes.js";
// import reviewRouter from "./Routes/ReviewRoutes.js";

const app = express();

dotenv.config();
mongoose.set("strictQuery", true);

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("connected to db");
	})
	.catch((err) => {
		console.log(err.message);
	});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/photos", photosRouter);
// app.use("/api/reviews", reviewRouter);

app.get("/", (req, res) => res.send("server is active!"));

//for hosting
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

const port = 5000;
app.listen(port, () => {
	console.log(`Serve at: http://localhost:${port}`);
});
