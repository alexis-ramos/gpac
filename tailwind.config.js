module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        monse: ['Montserrat'],
      },
      colors: {
        side: '#1A1C21',
        search: '#20232B',
        card: '#34343C',
        advanceSearch: '#2B313B',
        selected: '#FF3939',
        rowTable: '#34343C',
        hoverData: '#323C4A',
        button: '#4056F4'
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
};
