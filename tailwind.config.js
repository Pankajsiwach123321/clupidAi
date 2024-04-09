/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'content': '1320px'
      },
      colors: {
        'main': '#040403',
        'navBg': '#01020F',
        'black-primary-200': '#FBF0F02E',
        'gray-white-500': '#FFFFFF1A',
      },
      boxShadow: {
        'gradientMix': '0 0 20px 1px #F800B9',
      },
      backgroundImage: {
        "bg-gradient": "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
        "bg_gradient": "linear-gradient(180deg, rgba(14, 14, 14, 0) 0%, #040403 100%);",
        'whitegradient': "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)",
        'whiteborder': "linear-gradient(106.78deg, rgba(255, 255, 255, 0.23) 6.02%, rgba(255, 255, 255, 0.0759) 104.65%)",
        'textgradient': "linear-gradient(97.84deg, #FF4141 0.52%, #FFA6B0 23.61%, #FFB6E6 50%, #FFD8D8 75%, #BF8DFF 100%)",
        'headerTextgradient': "linear-gradient(88.36deg, #7F04E3 45.88%, #FF006B 76.63%)",
        'btngradient': "linear-gradient(191.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
        'gradientTrailBtn': "linear-gradient(96.17deg, #7F04E3 6%, #FF006B 98.41%)",
      },
    },
  },
  plugins: [],
}

