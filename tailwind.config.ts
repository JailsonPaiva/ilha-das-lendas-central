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
				// Nova Paleta Ilha das Lendas
				'black': 'hsl(var(--black))',
				'dark-purple': 'hsl(var(--dark-purple))',
				'electric-blue': 'hsl(var(--electric-blue))',
				'lilac-magenta': 'hsl(var(--lilac-magenta))',
				'lime-green': 'hsl(var(--lime-green))',
				'cyan-light': 'hsl(var(--cyan-light))',
				'white': 'hsl(var(--white))'
			},
			backgroundImage: {
				'gradient-main': 'var(--gradient-main)',
				'gradient-magic': 'var(--gradient-magic)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-border': 'var(--gradient-border)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glow': 'var(--gradient-glow)'
			},
			boxShadow: {
				'electric': 'var(--shadow-electric)',
				'magenta': 'var(--shadow-magenta)',
				'cyan': 'var(--shadow-cyan)',
				'card': 'var(--shadow-card)',
				'royal': 'var(--shadow-royal)',
				'magic': 'var(--shadow-magic)',
				'cyber': 'var(--shadow-cyber)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
				'elastic': 'var(--transition-elastic)'
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
						boxShadow: '0 0 20px hsl(var(--electric-blue) / 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--electric-blue) / 0.6), 0 0 60px hsl(var(--cyan-light) / 0.3)' 
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
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px)' 
					},
					'50%': { 
						transform: 'translateY(-10px)' 
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)' 
					},
					'50%': { 
						opacity: '0.7',
						transform: 'scale(1.05)' 
					}
				},
				'slide-in': {
					'0%': { 
						transform: 'translateX(-100%)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1' 
					}
				},
				'fade-in-up': {
					'0%': { 
						transform: 'translateY(30px)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'card-hover': 'card-hover 0.3s ease-out',
				'shimmer': 'shimmer 2s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-in': 'slide-in 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
