/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
				mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
			},
			colors: {
				surface: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#0a0f1a',
				},
				accent: {
					DEFAULT: '#3b82f6',
					light: '#60a5fa',
					dark: '#2563eb',
					glow: 'rgba(59, 130, 246, 0.4)',
				},
				cyan: {
					DEFAULT: '#06b6d4',
					light: '#22d3ee',
					glow: 'rgba(6, 182, 212, 0.3)',
				},
			},
			boxShadow: {
				glow: '0 0 20px rgba(59, 130, 246, 0.15), 0 0 60px rgba(59, 130, 246, 0.05)',
				'glow-lg': '0 0 30px rgba(59, 130, 246, 0.25), 0 0 80px rgba(59, 130, 246, 0.1)',
				'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.2), 0 0 60px rgba(6, 182, 212, 0.08)',
				card: '0 1px 3px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)',
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
				'fade-in-down': 'fadeInDown 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
				'slide-in-left': 'slideInLeft 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
				'slide-in-right': 'slideInRight 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
				'scale-in': 'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
				'pulse-slow': 'pulse 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
				'typewriter': 'typewriter 3s steps(30) forwards',
				'blink': 'blink 1s step-end infinite',
				'grid-move': 'gridMove 20s linear infinite',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				fadeInUp: {
					from: { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
					to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
				},
				fadeInDown: {
					from: { opacity: '0', transform: 'translate3d(0, -24px, 0)' },
					to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
				},
				slideInLeft: {
					from: { opacity: '0', transform: 'translate3d(-40px, 0, 0)' },
					to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
				},
				slideInRight: {
					from: { opacity: '0', transform: 'translate3d(40px, 0, 0)' },
					to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
				},
				scaleIn: {
					from: { opacity: '0', transform: 'scale(0.9)' },
					to: { opacity: '1', transform: 'scale(1)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				glowPulse: {
					from: { boxShadow: '0 0 20px rgba(59,130,246,0.1)' },
					to: { boxShadow: '0 0 40px rgba(59,130,246,0.3)' },
				},
				typewriter: {
					from: { width: '0' },
					to: { width: '100%' },
				},
				blink: {
					'50%': { borderColor: 'transparent' },
				},
				gridMove: {
					from: { transform: 'translate3d(0, 0, 0)' },
					to: { transform: 'translate3d(0, -50px, 0)' },
				},
			},
		},
	},
	plugins: [typography],
};
