/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
        colors:{
        'secondary': '#590995',
        'mainpink': '#C62A88',
        'mainblue': '#150485',
        'mainteal':'#03C4A1'
      },
    },
    
  },
  plugins: [],
}

