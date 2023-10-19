/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Black: ["EncodeSans-Black", "sans-serif"],
        Bold: ["EncodeSans-Bold", "sans-serif"],
        ExtraBold: ["EncodeSans-ExtraBold", "sans-serif"],
        ExtraLight: ["EncodeSans-ExtraLight", "sans-serif"],
        Light: ["EncodeSans-Light", "sans-serif"],
        Medium: ["EncodeSans-Medium", "sans-serif"],
        Regular: ["EncodeSans-Regular", "sans-serif"],
        SemiBold: ["EncodeSans-SemiBold", "sans-serif"],
        Thin: ["EncodeSans-Thin", "sans-serif"],
        Light: ["Montserrat-Light", "sans-serif"],
        MontRegular: ["Montserrat-Regular", "sans-serif"],
        MontBold: ["Montserrat-Bold", "sans-serif"],
        MontSemiBold: ["Montserrat-SemiBold", "sans-serif"],
        MontMedium: ["Montserrat-Medium", "sans-serif"],
      },

      colors: {
        touchSblack: "#1A1818",
        touchLightBlue: "##2EFFE1",
        touchSLightGrey: "#101010",
        touchSDeepGrey: "#292A2C",
        footerHover: "#2EFFE1",
      },
    },
  },

  plugins: [],
};
