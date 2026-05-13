/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00f2fe",
        secondary: "#4facfe",
        dark: "#0a0a0a",
        glass: "rgba(255, 255, 255, 0.05)",
        glassBorder: "rgba(255, 255, 255, 0.1)",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 242, 254, 0.2), 0 0 10px rgba(0, 242, 254, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 242, 254, 0.6), 0 0 30px rgba(0, 242, 254, 0.4)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
