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
        "about-hero-pattern": "url('/src/assets/Images/About-HeroImg.png')",
        "tharu-hero-pattern": "url('/src/assets/Images/tharu.jpeg')",
        "bardiya-hero-pattern": "url('/src/assets/Images/bardiya.jpeg')",
        "sherpas-hero-pattern": "url('/src/assets/Images/sherpas.jpg')",
      },
      fontFamily: {
        "font-raleway-regular": ["Raleway-Regular", "Calibri"],
        "font-raleway-bold": ["Raleway-Bold"],
      },
      width: {
        "-23": "23%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
