/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a259ff',
        background: {
          primary: '#2b2b2b',
          secondary: '#3b3b3b',
        },
        text: {
          primary: '#ffffff',
          secondary: '#858584',
        }
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        '20': '20px',
      },
      backdropBlur: {
        '15': '15px',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        reveal: 'reveal 0.3s ease-in-out',
      }
    },
  },
  plugins: [],
}
