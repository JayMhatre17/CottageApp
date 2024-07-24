import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Popover } from "flowbite-react";
import { IoInformationCircle } from "react-icons/io5";
const Landmarks = () => {
	return (
		<div>
			<div className="text-xl sm:text-3xl px-3 pt-2 m-6 font-bold text-pretty">
				Landmarks Near Me
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 w-full space-x-2 space-y-2 p-2">
				{[
					[
						"Bhileshwar Temple & Lake",
						"https://maps.app.goo.gl/oeRhhDhMj6j7v9xB8",
						"../images/temple.jpg",
						"10m",
						"The Bhileshwar temple is situated in close proximity, within a short walking distance. Dedicated to God Mahadev (Shankar), it is accompanied by a picturesque lake and a well situated in front of the temple. The view of the morning sunrise from this location is particularly stunning.",
					],
					[
						"Kihim Beach",
						"https://maps.app.goo.gl/Vsp4bkj6WY4QtX2L7",
						"../images/beach.jpg",
						"450m",
						"Kihim Beach is a one of the Famous Tourist spot in Alibag. Our Place is at walking distace from beach. Kihim Beach is beautiful and attractive place for taking photos. We can Khanderi and Underi from beach itself. ",
					],
					[
						"Kulaba Killa (Alibag)",
						"https://maps.app.goo.gl/NGo8d7xvoFjo8dkL7",
						"../images/Kulaba-Fort.jpg",
						"11Km",
						"Kulaba Fort located at Alibag beach is an old fortified maritime base in Alibag, Konkan, India. It is situated in the sea at a distance of 1-2 km from the shores of Alibag, 35 km south of Mumbai, in the Konkan region of Maharashtra, India. It is a popular tourist destination and a protected monument.",
					],
					[
						"Chamunda Devi Mandir (Gaodevi)",
						"https://maps.app.goo.gl/NxEYneHM1fxYaJ64A",
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rbyexw4Atra8vdMJGYsBPMJwiBKzsPit4w&s",
						"500m",
						"Chamunda Devi Mandir is Gaodevi mandir of Kihim. It is located near Kihim beach. It is Beautiful temple and has History of itself.",
					],
					[
						"Kankeshwar Temple",
						"https://maps.app.goo.gl/UUAUxCjRcWrb2FyF8",
						"../images/kank.jpg",
						"6.5Km",
						"Kankeshwar temple is located on the Konkan coast near Alibag, is a popular place, famous for its cool climate and the old temple of Shiva. The temple is situated on a small hill near the village of Mapgaon and village Zirad which is almost 5 km and 6 km from Our Cottage respectively. There are approximately 650 Stairs to Climb to the temple. There is Beautiful pond Which is mostly visited in Rainy Season.",
					],
					[
						"Alibag Beach",
						"https://maps.app.goo.gl/vr9sXuaBgGAbdShj7",
						"../images/alibag.jpg",
						"10Km",
						"The Alibag beach is a wonderful beach to have a bath when the tides turn towards the beach. It's like a long swimming pool and quite shallow to enjoy a good beach view.",
					],
					[
						"Mandwa Jetty",
						"https://maps.app.goo.gl/xuMSKRV1VobRdXfN9",
						"../images/mandwa.jpg",
						"12Km",
						"Mandwa Port is located in the small village of Mandwa in the city of Alibag, Raigarh district Maharashtra. Mandwa Port connects between Mumbai and Alibag beaches, which is one of the main reasons for its popularity. ",
					],
				].map(([title, maps, photo, dist,info]) => (
					<div className="relative h-auto w-auto border-solid border-4 rounded-xl border-sky-500 shadow-2xl">
						<Link to={maps} target="_blank">
							<div className="flex flex-row">
								<img
									className="h-1/3 w-1/3 rounded-xl p-2"
									src={photo}
									alt={title}
								/>

								<div className="flex flex-col text-lg sm:text-2xl font-bold p-3">
									{title}
									<div className="text-lg sm:text-xl animate-[pulse_2s_infinite] ">
										<div className="flex flex-wrap items-center">
											<FaLocationDot />
											{dist}
										</div>
									</div>
								</div>
							</div>
							{/* <div className="text-xs absolute right-7 bottom-4 animate-[ping_2s_infinite] ">
								<div className="flex flex-wrap items-center">
									<FaLocationDot />
									{dist}
								</div>
							</div> */}
						</Link>
						<Popover
							content={
								<div className="w-64 text-sm text-gray-500 dark:text-gray-400">
									<div className="px-3 py-2">
										<p>
											{info}
										</p>
									</div>
								</div>
							}
						>
							<div className="flex flex-row items-center text-blue-500 underline text-lg sm:text-xl pl-1 pb-1 absolute right-2 sm:right-7 bottom-1 sm:bottom-3">
								<IoInformationCircle />
								See More
							</div>
						</Popover>
					</div>
				))}
			</div>
		</div>
	);
};

export default Landmarks;
