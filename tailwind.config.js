/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors:{
				'orange':'#EC6B2F',
				'blue':'bg-#2C5282'
			}
		}
	},
	variants: {},
	plugins: []
}