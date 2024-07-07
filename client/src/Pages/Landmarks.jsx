import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
const Landmarks = () => {
	return (
		<div>
			<div className="text-3xl px-3 pt-2 m-6 font-bold">Landmarks Near Me</div>
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
					<div className="relative h-auto w-auto border-solid border-4 rounded-xl border-sky-500">
						<Link to={maps} target="_blank">
							<div className="flex flex-row">
								<img
									className="h-1/3 w-1/3 rounded-xl p-2"
									src={photo}
									alt={title}
								/>

								<div className="text-xl font-bold p-3">{title}</div>
							</div>
							<div className="text-xs absolute right-7 bottom-4 animate-[ping_2s_infinite] ">
								<div className="flex flex-wrap items-center">
									<FaLocationDot />
									{dist}
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Landmarks;
