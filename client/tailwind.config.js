/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors:{
        acapulco:{'50': '#C6E0D3',
          '100': '#B8D8C8',
          '200': '#A6CEBA',
          '300': '#90C2A9',
          '400': '#74B394',
          '500': '#5D8F76',
          '600': '#4A724E',
          '700': '#3B5B4B',
          '800': '#2F493C',
          '900': '#263A30',
          DEFAULT: '#74B394',
        },
        gray_nurse:{'50': '#FDFDFD',
        '75': '#FBFBFB',
        '100': '#F9FAF9',
        '200': '#F7F8F7',
        '300': '#F5F6F5',
        '400': '#C1C7C1',
        '500': '#8E998E',
        '600': '#5D675D',
        '700': '#2F342F',
        '800': '#263A30',
        DEFAULT: '#F5F6F5',

        },
        racing_green:{'50': '#9FA3A1',
        '100': '#878C89',
        '200': '#696F6C',
        '300': '#434B47',
        '400': '#141E19',
        '500': '#101814',
        '600': '#0D1310',
        '700': '#0A0FOD',
        '800': '#080COA',
        '900': '#060A08',
        DEFAULT: '#141E19',

        },
        mineral_green:{'50': '#AFBDB6',
        '100': '#9BACA4',
        '200': '#82978D',
        '300': '#637D70',
        '400': '#3C5C4C',
        '500': '#304A3D',
        '600': '#263B31',
        '700': '#1E2F27',
        '800': '#18261F',
        '900': '#131E19',
        DEFAULT: '#3C5C4C',

        },
        sea_green:{'50': '#5cd9c5',
      },
      Sheen_green:{'50':'#74b394',

      },
      black:{
        '50':'090A09'
      },
      off_white:{
        '100':'#fff5e9',
      },
      green_logo:{
        '50': '#52bf90'
      }
      },
    },
  },
  plugins: [],
}