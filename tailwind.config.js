/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "about" : "url('/about.png')",
        "code" : "url('/code.png')",
        "text" : "url('/text.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary' : '#12F7D6',
        'primary-100' : '#98FAEC',
        'gray' : '#43454D',
        'gray-2' : '#292F36',
        'black' : '#1A1E23'
      },
      fontSize  : {
        'sm' : '14px',
        'medium' : '16px',
        'lg' : '32px',
        'xlg' : '64px'
      }
    },
  },
  plugins: [],
};
