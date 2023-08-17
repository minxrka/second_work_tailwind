/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens:{
      lg:{'max': '1199.99px'},
      md:{'max': '991.99px'},
      sm:{'max': '767.99px'},
      xs:{'max': '479.99px'},
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage:{
        heroGradient: 'linear-gradient(110deg, #4923B4 0%, #E878CF 100%)',

      },
      colors:{
        blueViolet: '#5025B5',
        lightgray: '#666768',
      },
      keyframes:{
        'fade-in':{
          from:{
            opacity: 0,
          },
          to:{
            opacity:1,
          },
        },
      },
      animation:{
        fadeIn: '.3s fade-in ease-in-out',
      }
    },
  },
  plugins: [],
}

