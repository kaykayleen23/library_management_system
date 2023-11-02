/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/hero-bg.jpg')",
       
      },
      fontFamily: {
        lexend: ['Lexend'],
        zilla: ['Zilla SLab']
      },
    },
    backdropFilter: {
      'blur': 'blur(5px)', // You can adjust the blur radius as needed
    },
  },
  plugins: [ 
],
}

