/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}' // Add this line
	],
	theme: {
		extend: {
			colors: {
				primary: '#5e60eb',
				secondary: '#18F262'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
}
