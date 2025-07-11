/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,py}'],
	theme: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide', 'tailwind-scrollbar')],
}
