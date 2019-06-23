import typefaces from "./typefaces";

const theme = {
  white: "#fff",

  lightGrey: "#F5F5F5",

  lightBlue: "#C7E6FE",
  mediumBlue: "#374B68",
  darkBlue: "#102A4E",
  transparent: "transparent",

  lightPink: "#EFC5B6",

  // Borders
  cardBorderRadius: "30px",

  // Fonts
  typefaces,
  primaryFont: "Poppins",
  secondaryFont: "RobotoCondensed",
  fontSmoothing: `
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `
};

export default theme;
