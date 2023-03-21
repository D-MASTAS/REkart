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
      sea_green: { '100': '#92C9BF',
      '200': '#80C0B4',
      '300': '#6EB7AA',
      '400': '#5CAE9F',
      '500': '#4AA695',
      '600': '#429586',
      '700': '#3B8477',
      '800': '#337468',
      '900': '#2C6359',
       DEFAULT: '#4AA695',},
pantone:{  '100': '#66C1C1',
'200': '#4CB6B7',
'300': '#32ACAD',
'400': '#19A2A3',
'500': '#009899',
'600': '#008889',
'700': '#00797A',
'800': '#006A6B',
'900': '#005B5B',
DEFAULT: '#009899',},
cyan:{ 
'100': '#66B8C4',
'200': '#4CADBB',
'300': '#32A1B1',
'400': '#1995A7',
'500': '#008A9E',
'600': '#007C8E',
'700': '#006E7E',
'800': '#00606E',
'900': '#00525E',
DEFAULT: '#008A9E',},
saphire_blue: {
'50': '#CCE4EC',
'100': '#7fbcd0',
'200': '#4CA1BD',
'300': '#3294B4',
'400': '#1987AB',
'500': '#007AA2',
'600': '#006D91',
'700': '#006181',
'800': '#004961',
'900': '#005571',
 DEFAULT: '#007AA2',},
french_blue: {
'100': '#66A4C7',
'200': '#4C95BD',
'300': '#3286B4',
'400': '#1977AB',
'500': '#007AA2',
'600': '#005D91',
'700': '#005381',
'800': '#004871',
'900': '#003E61',
  DEFAULT: '#0068A2',},
      },
    },
  },
  plugins: [

  ],
}