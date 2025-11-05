// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-deep': '#07040a',       // near-black warm
        'panel': '#0f1318',         // card panels
        'cherry': {
          DEFAULT: '#C8102E',
          600: '#A10A22',
          800: '#6e0716'
        },
        'scarlet': '#9b0f1d',
        'neon-pink': '#ff4da6',
        'neon-purple': '#8b3cff',
        'neon-blue': '#00d1ff',
        'neon-cyan': '#00ffd5',
        'muted-ink': '#9aa3b2'
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'ui-sans-serif', 'system-ui'],
        monoui: ['"VT323"', 'monospace'],
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial']
      },
      boxShadow: {
        'neon-sm': '0 6px 18px rgba(139,60,255,0.08), 0 0 18px rgba(255,77,166,0.05)',
        'neon-md': '0 18px 40px rgba(200,16,46,0.08), 0 0 40px rgba(0,209,255,0.06)'
      },
      screens: {
        'xs': '420px'
      }
    }
  },
  plugins: []
}
