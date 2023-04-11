/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'san-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
