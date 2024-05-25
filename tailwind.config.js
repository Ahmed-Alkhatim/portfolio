/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary' : '#12F7D6',
        'primary-100' : '#98FAEC'
      },
      fontSize  : {
        'medium' : '14px',
        'lg' : '32px',
      }
    },
  },
  plugins: [],
};
