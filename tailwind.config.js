/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/hero-bg.jpg')",
        'about': "url('/img/about-img.jpg')",
      },
      fontFamily: {
        lexend: ['Lexend'],
        zilla: ['Zilla SLab']
      },
    },
  },
  plugins: [],
}

