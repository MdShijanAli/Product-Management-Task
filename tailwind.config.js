/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        // my custom colors 
        'primary': '#227B82', 
        'secondary': '#ED1C24',  
        'background': '#E7F0FD',
        
      },
      fontSize: {
        // my custom font sizes 
        'h1': '36px',
        'h2': '25px',
        'dashboardHeader': '22px',
        'paragraph': '15px',
         'h5': '16px',
        'h6': '14px',
        'p': '12px',
        'h3': '13px',
         'h4': '18px'
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')
  ],
}

