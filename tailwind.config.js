/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        azurWhite: '#D1DCF9',
        alisBlue: '#F4F8FC',
        grayColor: 'rgba(0,0,0,.6)',
        activeSpotifyColor: '#EDFCF3',
        hoverSpotifyColor: '#E7F9EE',
        inactiveSpotifyColor: '#fceded',
        inactiveHoverSpotifyColor: '#f9e7e7',
        spotifyPlay: '#1ED760',
        hoverSpotifyPlay: '#22ba58',
        inactiveSpotifyPlay: '#d71e1e',
        inactiveHoverSpotifyPlay: '#ba2222',

        vsCodePrimary: '#277dff',
        vsCodeUnhover: 'rgba(39, 125, 255, .2)',
        vsCodeHover: 'rgba(39, 125, 255, .25)',

        valorantPrimary: '#BD3944',
        valorantUnhover: 'rgba(253, 69, 86, .2)',
        valorantHover: 'rgba(253, 69, 86, .25)'
      },
      borderColor: {
        spotifyBorder: '#1ED760',
        inactiveSpotifyBorder: '#d71e1e',
        vsCodeBorder: '#277dff',

        valorantBorder: '#BD3944'

      },
      boxShadowColor: {
        grayColor: 'rgba(0,0,0,.2)',
      },
      fontFamily: {
        satoshiBlack: ["Satoshi-Black", "sans-serif"],
        satoshiBold: ["Satoshi-Bold", "sans-serif"],
        satoshiMedium: ["Satoshi-Medium", "sans-serif"],
        satoshiRegular: ["Satoshi-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
}

