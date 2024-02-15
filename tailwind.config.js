const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainbg: '#18191A',
        componentColor: '#242526',
        menuBar: '#212121',
        primaryText: '#E4E6EB',
        secondaryText: '#B0B3B8',
        hover: '#3A3B3C',
        textBlue: '#007acc',
      }
    },
  },
  plugins: [],
});