import express from "express";
import Photos from "../models/PhotosModel.js";
import expressAsyncHandler from "express-async-handler";
import { isAuth, isAdmin } from "../utils.js";

const photosRouter = express.Router();

photosRouter.get("/images", async (req, res) => {
	const images = await Photos.find();
	res.send(images);
});

photosRouter.get(
	"/search/images",
	expressAsyncHandler(async (req, res) => {
		const { query } = req;
		const category = query.category || "";
		const categoryFilter = category && category !== "all" ? { category } : {};
		const images = await Photos.find({ ...categoryFilter });
		res.send(images);
	})
);

photosRouter.get(
	"/search/categories",
	expressAsyncHandler(async (req, res) => {
		const categories = await Photos.find().distinct("category");
		res.send(categories);
	})
);

photosRouter.post(
	"/",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const newImage = new Photos({
			path: "https://placehold.co/500x300?text=Im+just+a+placeholder+replace+me!",
			category: "Rooms",
		});
		await newImage.save();
		res.send({ message: "New image is created.", newImage });
	})
);

photosRouter.put(
	"/:id",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const imageId = req.params.id;
		const image = await Photos.findById(imageId);
		if (image) {
			(image.path = req.body.path), (image.category = req.body.category);
			await image.save();
			res.send({ message: "Image have been updated" });
		} else {
			res.status(404).send({ message: "Image not found." });
		}
	})
);

photosRouter.delete(
	"/:id",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const image = await Photos.findById(req.params.id);
		if (image) {
			await image.deleteOne();
			res.send({ message: "Image deleted." });
		} else {
			res.status(404).send({ message: "Image not found." });
		}
	})
);

export default photosRouter;
