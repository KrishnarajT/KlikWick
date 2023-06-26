/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./*/*.{html,js, jsx, ts, tsx, md, mdx}",
		"./src/*/*.{html,js, jsx, ts, tsx, md, mdx}",
		"./src/components/*.{html,js, jsx, ts, tsx, md, mdx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("flowbite/plugin")],
});
