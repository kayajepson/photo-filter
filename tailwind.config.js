module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        'screen/2': '50vh',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
