/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        EncodeBlack: ["EncodeSans-Black", "sans-serif"],
        EncodeBold: ["EncodeSans-Bold", "sans-serif"],
        ExtraBold: ["EncodeSans-ExtraBold", "sans-serif"],
        ExtraLight: ["EncodeSans-ExtraLight", "sans-serif"],
        EncodeLight: ["EncodeSans-Light", "sans-serif"],
        EncodeMedium: ["EncodeSans-Medium", "sans-serif"],
        EncodeRegular: ["EncodeSans-Regular", "sans-serif"],
        EncodeSemiBold: ["EncodeSans-SemiBold", "sans-serif"],
        EncodeThin: ["EncodeSans-Thin", "sans-serif"],
        MontLight: ["Montserrat-Light", "sans-serif"],
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
