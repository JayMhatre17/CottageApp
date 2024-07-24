import React from "react";
import { Button, Carousel } from "flowbite-react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div
			className="font-bold w-full sm:bg-cover bg-blend-darken contrast-100"
			style={{ backgroundImage: `url("../images/beah.jpg")` }}
		>
			<div className="h-48 sm:h-96 brightness-100 xl:h-80 2xl:h-96">
				<Carousel slideInterval={5000}>
					<img src="../images/home/Carousel/front.jpg" alt="Banner" />
					<img src="../images/home/Carousel/carouselImage2.jpg" alt="Banner" />
					<img src="../images/home/Carousel/tables.jpg" alt="Banner" />
				</Carousel>
			</div>
			<div className="flex flex-col w-full h-full mb-14 sm:mb-4 sm:flex-row">
				<div className="w-full h-full sm:h-screen p-10 flex justify-center sm:w-1/2 ">
					<img
						src="../images/home/hero.jpg"
						className="rounded-lg shadow-blue-600 shadow-xl border-4 border-transparent brightness-125 h-3/4 hover:shadow-2xl drop-shadow-lg "
						alt=".."
					></img>
				</div>
				<div className="w-full pr-4 pl-4 lg:p-6">
					<div className="m-10 sm:m-20 h-96 pt-10 border-slate-500">
						<p className="text-3xl font-bold text-center font-robo italic">
							"Welcome to JayPrabha <br></br>Holiday Home"
						</p>
						<div className="text-justify mt-5 pt-5 h-48 w-70 font-robo">
							<li>Enjoy delicious food and cozy rooms at our place.</li>{" "}
							<li>
								Unwind and relax in the tranquil surroundings of our Kihim, with
								activities such as beach sports and visiting forts such as
								Kulaba Fort, which is situated close to our location.
							</li>
							<li>
								We strive to make your stay unforgettable with warm hospitality
								and beautiful views of Kihim.
							</li>
							<li>
								We have both AC and Non AC Rooms Available.
							</li>
						</div>
					</div>
				</div>
			</div>
			<div className="backdrop-blur-sm">
				<div className="flex text-3xl font-bold mt-32 sm:mt-0 justify-center">
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
			<div className="flex justify-center py-10 text-2xl">
				<Button className="text-2xl font-extrabold">
					<Link
						to="https://www.google.com/maps/place/Jay+Prabha+Holiday+Home+Hotel/@18.7287779,72.8665638,17z/data=!4m8!3m7!1s0x3be87845e2dbca71:0xdf7454cdf08fcb3!8m2!3d18.7287728!4d72.8691387!9m1!1b1!16s%2Fg%2F11g8cs0gqn?entry=ttu"
						target="_blank"
					>
						See Reviews
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Home;
