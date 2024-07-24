import React from "react";
import { Link } from "react-router-dom";

const MEnu = (props) => {
	return (
		<>
			{/* <Fade top timeout={1300} delay={1000} distance="60px"> */}
			<div className="w-full md:w-1/3 sm:w-full pr-4 pl-4 pt-2">
				<Link to={props.link}>
					<div className="container mx-auto relative my-3 group">
						<div className="absolute"></div>
						<img
							className="relative rounded-full group-hover:opacity-50 transition-opacity duration-300"
							src={props.src}
							alt={props.name}
						/>
						<h1 className="flex justify-center font-bold capitalize">
							{props.name}
						</h1>
						{/* <div>
							<span className="block text-center">{props.price}&#8377;</span>
						</div> */}
						<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-800 bg-opacity-50 rounded-lg">
							<div className="text-white text-center">
								<h3>{props.name}</h3>

								<ul className="list-disc text-left">
									{props.features.map((feature, index) => (
										<li key={index}>{feature}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</Link>
			</div>
			{/* </Fade> */}
		</>
	);
};
export default MEnu;
