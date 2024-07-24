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
					],
					[
						"Kihim Beach",
						"https://maps.app.goo.gl/Vsp4bkj6WY4QtX2L7",
						"../images/beach.jpg",
						"450m",
					],
					[
						"Kulaba Killa (Alibag)",
						"https://maps.app.goo.gl/NGo8d7xvoFjo8dkL7",
						"../images/Kulaba-Fort.jpg",
						"11Km",
					],
					[
						"Chamunda Devi Mandir (Gaodevi)",
						"https://maps.app.goo.gl/NxEYneHM1fxYaJ64A",
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rbyexw4Atra8vdMJGYsBPMJwiBKzsPit4w&s",
						"500m",
					],
					[
						"Kankeshwar Temple",
						"https://maps.app.goo.gl/UUAUxCjRcWrb2FyF8",
						"../images/kank.jpg",
						"6.5Km",
					],
					[
						"Alibag Beach",
						"https://maps.app.goo.gl/vr9sXuaBgGAbdShj7",
						"../images/alibag.jpg",
						"10Km",
					],
					[
						"Mandwa Jetty",
						"https://maps.app.goo.gl/xuMSKRV1VobRdXfN9",
						"../images/mandwa.jpg",
						"12Km",
					],
				].map(([title, maps, photo, dist]) => (
					<div className="relative h-auto w-auto border-solid border-4 rounded-xl border-sky-500 shadow-2xl">
						<Link to={maps} target="_blank">
							<div className="flex flex-row">
								<img
									className="h-1/3 w-1/3 rounded-xl p-2"
									src={photo}
									alt={title}
								/>

								<div className="flex flex-col text-xs sm:text-2xl font-bold p-3">
									{title}
									<div className="text-xs sm:text-xl animate-[pulse_2s_infinite] ">
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
											And here's some amazing content. It's very engaging.
											Right?
										</p>
									</div>
								</div>
							}
						>
							<div className="flex flex-row items-center text-blue-500 underline text-xs sm:text-xl pl-1 pb-1 absolute right-2 sm:right-7 bottom-1 sm:bottom-3">
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
