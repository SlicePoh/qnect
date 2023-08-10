/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#000B13',
        'dark-2': '#001C30',
        'dark-3': '#102A3D',
        'rose-1': '#FB2576',
        'rose-2': '#B85C81',
        'beige': '#87737B',
      },
    },
  },
  plugins: [],
}