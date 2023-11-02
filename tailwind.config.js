/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/hero-bg.jpg')",
        'about': "url('/img/about-img.jpg')",
        'signup': "url('/img/signup-img.jpg')",
        'login': "url('/img/login-img.jpg')",
        'admin': "url('/img/admin-img.jpg')",
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

