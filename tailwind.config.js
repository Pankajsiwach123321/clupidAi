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
      fontSize: {
        xs: '12px',
        sm: '14px',
        '2sm': '15px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '22px',
        '2xl': '24px',
        '3xl': '30px',
        '3xl1': '32px',
        '3xl2': '36px',
        '4xl': '40px',
        '4xl2': '42px',
        '5xl': '48px',
        '6xl': '50px',
        '7xl': '60px',
      },
      colors: {
        'main': '#040403',
        'navBg': '#01020f63',
        'black-primary-200': '#FBF0F02E',
        'gray-white-500': '#FFFFFF1A',
        'gray-white-200': '#EAECF0',
        'black-primary': '#040403',
        'black-primary-100': '#01020f2e',
        'gray': '#646464',
        'gray-white': '#E4E2EE',
        'gray-white-200': '#EAECF0',
        'gray-white-100': '#CAC6DD',
        'gray-dark-200': '#57606A',
        'gray-light-300': '#99A2AF',
        'dark-gray': '#FFFFFF99',
        'mid-white': '#E4E4E7',
        'off-white': '#A1A1AA',
        'off-black': '#0E0D0D',
        'mid-gray': '#212121',
        'blue': '#7F04E2',
        'orange-red': '#F800B9',
        'dark-black': '#1B1530',
        'light-red': '#FF6363',
        'dark-black-300': '#110E19',
        'gray-white-600': '#FFFFFF0D',
        'gray-black-200': '#858585',
        'dark-gray-200': '#646464',
        'dark-gray-300': '#616569', 
        'dark-white-300': '#A3ABB2', 
      },
      boxShadow: {
        'gradientMix': '0 0 20px 1px #F800B9',
      },
      backgroundImage: {
        "bg-gradient": "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
        "bg_gradient": "linear-gradient(180deg, rgba(14, 14, 14, 0) 0%, #040403 100%);",
        'whitegradient': "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)",
        'textgradient': "linear-gradient(97.84deg, #FF4141 0.52%, #FFA6B0 23.61%, #FFB6E6 50%, #FFD8D8 75%, #BF8DFF 100%)",
        'headerTextgradient': "linear-gradient(88.36deg, #7F04E3 45.88%, #FF006B 76.63%)",
        'btngradient': "linear-gradient(191.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
        'gradientTrailBtn': "linear-gradient(96.17deg, #7F04E3 6%, #FF006B 98.41%)",
      },
      animation: {
        'moveX': 'translateX 39s linear infinite forwards',
        'moveSmX': 'translateSmX 49s linear infinite forwards',
        'movelinner': 'move_ellipes 2s linear infinite alternate',
      },
      keyframes: {
        translateX: {
          '0%': { transform: 'translateX(80%)' },
          '100%': { transform: 'translateX(-80%)' },
        },
        translateSmX: {
          '0%': { transform: 'translateX(300%)' },
          '100%': { transform: 'translateX(-300%)' },
        },
        move_ellipes: {
          '0%': {
            transform: 'scaleY(1)'
          },
          '100%': {
            transform: 'scaleY(1.5)'
          },
        },
      },
      lineHeight: {
        '11': '48.41px',
        '12': '56px',
        '13': '72px',
        '14': '81%',
        '15': '125%',
        '16': '140%',
        '17': '147%',
        '18': '156%'
      },
      screens: {
        'slg': '940px',
      },
      backgroundSize: {
        "BgSize": "100% 100%"
      },
      borderRadius: {
        '2md': '41px',
        '3md': '48px',
      },
    },
  },
  plugins: [],
}

