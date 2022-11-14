/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      Poppins:"'Poppins', sans-serif",
      Monserrat:"'Montserrat', sans-serif"
      },
      screens: {
        "ssm": '320px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
     
    extend: {
      colors:{
        yellow: "#FBAE3C",
        blue:"#001220"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
   
  ],
}
