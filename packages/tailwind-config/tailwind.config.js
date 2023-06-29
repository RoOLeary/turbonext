const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
        biege: '#F8F5EF',
        offwhite: '#FAF9F6',
        greenish: '#88A91E',
        graylink: '#5b534e'
      },
      zIndex: {
        '100': '100',
        '200': '300',
      }
      
    },
  },
  plugins: [],
};
