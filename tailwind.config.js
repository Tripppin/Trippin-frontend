module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Images/Hero Image.png')",
      },
      fontFamily: {
        "font-raleway-regular": ["Raleway-Regular", "Calibri"],
        "font-raleway-bold": ["Raleway-Bold"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
