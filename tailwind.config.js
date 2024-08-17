/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
        'tablet': '768px',
        // => @media (min-width: 768px) { ... }

        'lap': '991px',
        // => @media (min-width: 1280px) { ... }

        'desk': '1920px',
        // => @media (min-width: 1920px) { ... }
    },
    extend: {
      transitionDuration: {
        '5000' : "8000ms"
      },
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
        'black' : '#1A1E23',
        'html' : '#E54F26',
        'css' : '#0C73B8',
        'js' : '#E7A020',
        'react' : '#28A9E0',
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
