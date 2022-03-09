module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'old-english-text' : ['Old English Text MT']
    },
    colors: {
      primary: '#006FC9',
      'primary-darker': '#0064b5',
      "primary-light": '#F0F9FF',
      secondary: '#67AEE5',
      success: '#8BC540',
      'success-light': '#EEFFED',
      danger: '#A80000',
      "danger-light": "#FFF2F2",
      warning: '#FFB901',
      "warning-light": "#FFFAF2",
      info: '#CFE5F6',
      light: '#FFFFFF',
      'dark-gray': '#B3AFAB',
      gray: '#E1DFDD',
      'light-gray': '#F2F2F2',
      'lighter-gray': '#F3F2F1',
      dark: '#323130',
      'dark-translucent': '#32313080',
      'ash-gray': '#605E5C',
      'dark-blue': '#006BC3',
      'dirty-white':'#FAF9F8'
    },
    backgroundImage: {
      'usys-login-background': "url('./assets/usys_bg.jpg')",
      'usys-logo': "url('./assets/usys_logo.png')",
    }
  },
  plugins: [],
}
