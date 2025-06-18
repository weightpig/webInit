/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '999': '999',
      },
    },
    screens: {
      '900px': { max: '900px' },
      // 其他断点...
    },
  },
  plugins: [],
}

