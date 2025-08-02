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
				'inter': ['Inter', 'sans-serif'],
				'orbitron': ['Orbitron', 'monospace'],
			},
			colors: {
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
				},
				// Ilha das Lendas Custom Colors
				'electric-blue': {
					DEFAULT: 'hsl(var(--electric-blue))',
					light: 'hsl(var(--electric-blue-light))',
					dark: 'hsl(var(--electric-blue-dark))'
				},
				magenta: {
					DEFAULT: 'hsl(var(--magenta))',
					light: 'hsl(var(--magenta-light))',
					dark: 'hsl(var(--magenta-dark))'
				},
				'lime-green': {
					DEFAULT: 'hsl(var(--lime-green))',
					light: 'hsl(var(--lime-green-light))',
					dark: 'hsl(var(--lime-green-dark))'
				},
				'cyan-light': {
					DEFAULT: 'hsl(var(--cyan-light))',
					bright: 'hsl(var(--cyan-light-bright))',
					dim: 'hsl(var(--cyan-light-dim))'
				},
				'dark-purple': {
					DEFAULT: 'hsl(var(--dark-purple))',
					light: 'hsl(var(--dark-purple-light))',
					dark: 'hsl(var(--dark-purple-dark))'
				}
			},
			backgroundImage: {
				'gradient-main': 'var(--gradient-main)',
				'gradient-magic': 'var(--gradient-magic)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-border': 'var(--gradient-border)'
			},
			boxShadow: {
				'electric': 'var(--shadow-electric)',
				'magenta': 'var(--shadow-magenta)',
				'cyan': 'var(--shadow-cyan)',
				'card': 'var(--shadow-card)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--gold) / 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--gold) / 0.6), 0 0 60px hsl(var(--cyber-cyan) / 0.3)' 
					}
				},
				'card-hover': {
					'0%': { 
						transform: 'translateY(0) scale(1)' 
					},
					'100%': { 
						transform: 'translateY(-8px) scale(1.02)' 
					}
				},
				'shimmer': {
					'0%': { 
						backgroundPosition: '-200% 0' 
					},
					'100%': { 
						backgroundPosition: '200% 0' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'card-hover': 'card-hover 0.3s ease-out',
				'shimmer': 'shimmer 2s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
