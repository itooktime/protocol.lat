/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html", "/src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'courier': ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

