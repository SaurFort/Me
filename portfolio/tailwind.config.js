/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			maxWidth: {
				'90%': '90%',
			}
		}
	},

	plugins: []
};
