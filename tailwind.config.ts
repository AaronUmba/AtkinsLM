import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	safelist: [
		// Background colors for notebook cards
		'bg-red-900/20', 'bg-blue-900/20', 'bg-green-900/20', 'bg-yellow-900/20', 'bg-purple-900/20', 
		'bg-pink-900/20', 'bg-indigo-900/20', 'bg-gray-900/20', 'bg-orange-900/20', 'bg-teal-900/20',
		'bg-cyan-900/20', 'bg-emerald-900/20', 'bg-lime-900/20', 'bg-amber-900/20', 'bg-violet-900/20',
		'bg-fuchsia-900/20', 'bg-rose-900/20', 'bg-sky-900/20', 'bg-slate-900/20', 'bg-zinc-900/20',
		'bg-neutral-900/20', 'bg-stone-900/20',
		// Border colors for notebook cards
		'border-red-700/30', 'border-blue-700/30', 'border-green-700/30', 'border-yellow-700/30', 
		'border-purple-700/30', 'border-pink-700/30', 'border-indigo-700/30', 'border-gray-700/30', 
		'border-orange-700/30', 'border-teal-700/30', 'border-cyan-700/30', 'border-emerald-700/30', 
		'border-lime-700/30', 'border-amber-700/30', 'border-violet-700/30', 'border-fuchsia-700/30', 
		'border-rose-700/30', 'border-sky-700/30', 'border-slate-700/30', 'border-zinc-700/30',
		'border-neutral-700/30', 'border-stone-700/30',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Noto Sans', 'sans-serif'],
				'heading': ['IBM Plex Sans', 'sans-serif'],
			},
			colors: {
				// AtkinsRealis color palette
				'atkins': {
					'dark': '#1A2D39',
					'light': '#BEDAE5',
					'accent': '#05E660',
					'grey-dark': '#2A3F4B',
					'grey-medium': '#4A5F6B',
					'grey-light': '#8A9FA5',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: '12px',
				md: '10px',
				sm: '8px',
				DEFAULT: '8px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
