/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				robo: ['"Roboto Slab"'],
			},
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
		},
	},
	plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
