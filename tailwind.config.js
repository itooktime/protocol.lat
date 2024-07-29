/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html", "/home"],
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

