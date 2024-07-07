import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";
const Review = () => {
	const [index, setIndex] = useState(0);
	const { id, name, job, image, text } = people[index];
	const checkNumber = (number) => {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
		}
		return number;
	};

	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};

	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	return (
		<article className="border m-3 mx-10 rounded-[var(--radius)] shadow-[var(--light-shadow)] transition-[var(--transition)] text-center px-8 py-6 hover:shadow-[var(--dark-shadow)]">
			<div className="relative w-[150px] h-[150px] mb-6 mx-auto my-0 rounded-[50%] before:content-[''] before:w-full before:h-full before:absolute before:top-[-0.25rem] before:right-[-0.5rem] before:rounded-[50%]">
				<img
					src={image}
					alt={id}
					className="w-full block h-full object-cover relative rounded-[50%]"
				/>
				<span className="absolute w-10 h-10 grid place-items-center translate-y-1/4 text-[color:var(--clr-white)] rounded-[50%] left-0 top-0">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="mb-1">{name}</h4>
			<p className="uppercase text-[color:var(--clr-primary-5)] text-[0.85rem] mb-2">
				{job}
			</p>
			<p className="mb-3">{text}</p>
			<div className="button-container">
				<button
					className="text-[color:var(--clr-primary-7)] text-xl transition-[var(--transition)] cursor-pointer mx-2 my-0 border-transparent"
					onClick={prevPerson}
				>
					<FaChevronLeft />
				</button>
				<button
					className="text-[color:var(--clr-primary-7)] text-xl transition-[var(--transition)] cursor-pointer mx-2 my-0 border-transparent"
					onClick={nextPerson}
				>
					<FaChevronRight />
				</button>
			</div>
		</article>
	);
};

export default Review;
