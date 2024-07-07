import React from "react";
import { Carousel } from "flowbite-react";
import Menu from "../components/Menu";

const Home = () => {
	return (
		<div className="bg-grey-200 font-bold">
			<div className="h-48 sm:h-96 top-0 sm:top-6  xl:h-80 2xl:h-96">
				<Carousel slideInterval={5000}>
					<img src="../images/home/carousel/carouselImage1.jpg" alt="Banner" />
					<img src="../images/home/carousel/carouselImage2.jpg" alt="Banner" />
					<img src="../images/home/carousel/carouselImage3.jpg" alt="Banner" />
				</Carousel>
			</div>
			<div className="flex flex-col w-full h-full mb-14 sm:mb-4 sm:flex-row">
				<div className="w-full h-full sm:h-screen p-10 flex justify-center sm:w-1/2 ">
					<img
						src="../images/home/hero.jpg"
						className="rounded-lg shadow-2xl h-3/4 hover:shadow-2xl shadow-blue-800/50"
						alt=".."
					></img>
				</div>
				<div className="w-full pr-4 pl-4 lg:p-6">
					<div className="m-10 sm:m-20 h-96 pt-10 border-slate-500">
						<p className="text-3xl font-bold text-center font-robo italic">
							"Welcome to JayPrabha <br></br>Holiday Home"
						</p>
						<div className="text-justify mt-5 pt-5 h-48 w-70 font-robo">
							<li>Enjoy delicious food, cozy rooms, and modern amenities.</li>{" "}
							<li>
								Relax and unwind in our serene surroundings, with activities
								like Beach sports,seeing forts like Kulaba fort which is near to
								our location.
							</li>
							<li>
								Let us make your stay unforgettable with warm hospitality and
								beautiful views of Kihim.
							</li>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="flex text-3xl font-bold mt-20 sm:mt-0 justify-center">
					Menu Items
				</div>
				<div className="flex flex-wrap">
					<Menu
						src="https://media-cdn.tripadvisor.com/media/photo-p/15/81/c5/aa/mutton-super-special.jpg"
						name="Chicken Thali"
						price="350"
						features={[
							"Chicken Gravy",
							"Chicken Sukha",
							"Chapati/Bhakri",
							"Rice",
							"Sol kadi",
						]}
					/>
					<Menu
						src="https://content3.jdmagicbox.com/comp/pune/e7/020pxx20.xx20.190906210112.b1e7/catalogue/the-fish-thali-fergusson-college-road-pune-inexpensive-restaurants-below-rs-500--wlojum25r4.jpg?clr="
						name="Fish Thali"
						price="400"
						features={[
							"Surmai Fry ",
							"Prawns Curry",
							"Chapati/Bhakri",
							"Rice",
							"Sol kadi",
						]}
					/>
					<Menu
						src="https://i.pinimg.com/originals/76/8e/a3/768ea3a6492b597e60cb92b38ebccbda.jpg"
						name="Mutton Thali"
						price="450"
						features={[
							"Mutton Gravy",
							"Mutton Sukha",
							"Chapati/Bhakri",
							"Rice",
							"Sol kadi",
						]}
					/>
					<Menu
						src="https://cdn.dotpe.in/longtail/item_thumbnails/8033331/yghSFG2s.webp"
						name="Egg Thali"
						price="300"
						features={["Egg Curry", "Omlete", "Chapati/Bhakri", "Rice"]}
					/>
					<Menu
						src="https://img.cdnx.in/276483/1671114555118_SKU-0004_0.png?width=600"
						name="Veg Thali"
						price="200"
						features={[
							"2 Bhaji",
							"Dal Curry",
							"Chapati/Bhakri",
							"Rice",
							"Sol kadi",
							"Sweet",
							"Papad",
						]}
					/>
				</div>
			</div>
			{/* <Carousel slideInterval={3000}>
				<Review />
			</Carousel> */}
		</div>
	);
};

export default Home;
