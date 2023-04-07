/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		  sm: '480px',
		  md: '768px',
		  lg: '976px',
		  xl: '1440px',
		},
		fontSize: {
			'xs': '1rem',
			'sm': '1rem',
			'base': '1.125rem',  // 18
			'lg': '1.25rem',     // 20
			'xl': '1.75rem',     // 28
			'2xl': '2.1875rem',  // 35
			'3xl': '3.25rem',    // 52
			'4xl': '4.5rem',     // 72
			'5xl': '5.75rem',    // 92
			'hero': 'calc(11500vw/1920)',
			'aboutTitle': 'calc(4500vw/1440)',
			'contact': 'calc(5700vw/1440)',
		},
		fontFamily: {
			EudoxusVariable: ['EudoxusVariable'],
			Eudoxus: ['Eudoxus'],
		},
		keyframes: {
			widthIn:{
			  '0%': { width: '0%' },
			  '100%': { width: '100%' },
			},
			widthOut:{
				'0%': { width: '100%' },
				'100%': { width: '0%' },
			  },
			fadeLeft:{
			  '0%': { transform: 'translateX(0%)' },
			  '100%': { transform: 'translateX(100%)' },
			},
			fadeUp: {
			  '0%': { transform: 'translateY(100%)' },
			  '100%': { transform: 'translateY(0%)' },
			},
			rotateY:{
				'0%': { transform: 'translateY(0%)' },
				'100%': { transform: 'translateY(425%)' },
			},
		},		
		extend: {
			colors : {
				'lightbackground' : "#FFFFFF",
				'darkbackground': "#090A0B",
				'bluebackground' : '#EAF5FB',
				'blue' : "#07184F",
				'white' : "#FFFFFF",
				'black': "#000000",
				'gray' : "#C1C4CF",
				'gradientColor' : [
					  'rgb(255,142,84)',
					  'rgba(218,51,208,1)',
					  'rgba(120,50,215,1)',
					],
			},
			fontWeight: {
				normal: '400',
				medium: '500',
				bold: '700',
			},
			borderRadius: {
				'xl': '16px',
			}
		}
	  },
	plugins: [],
}
