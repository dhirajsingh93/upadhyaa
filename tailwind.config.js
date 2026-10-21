/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#101820',
          dark: '#0B111B',
          light: '#182536',
        },
        graphite: {
          DEFAULT: '#202D3D',
          light: '#29394B',
          border: '#39495A',
        },
        'warm-white': {
          DEFAULT: '#F5F3EE',
          dark: '#E8E5DD',
          muted: '#D5D1C7',
        },
        'industrial-orange': {
          DEFAULT: '#F47735',
          hover: '#E06322',
          dark: '#C85317',
          light: '#FFF2EB',
          glow: 'rgba(244, 119, 53, 0.25)',
        },
        'muted-gray': {
          DEFAULT: '#A7AAA5',
          light: '#C4C7C2',
          dark: '#6E726D',
        },
      },
      fontFamily: {
        display: ['Syne', 'Outfit', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
}
