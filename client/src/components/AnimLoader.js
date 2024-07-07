import React, { useEffect } from "react";
import { preLoaderAnim } from "../Animation";
import "./AdminLoader.css";
const AnimLoader = () => {
	useEffect(() => {
		preLoaderAnim();
	}, []);
	return (
		<div className="preloader">
			<div className="texts-container">
				<span>Welcome </span>
			</div>

			<div className="texts-container">
				<span>To</span>
			</div>
			<div className="texts-container">
				<span>JayPrabha</span>
			</div>
			<div className="texts-container">
				<span>Holiday</span>
			</div>
			<div className="texts-container">
				<span>Home</span>
			</div>
		</div>
	);
};

export default AnimLoader;
