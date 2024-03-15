/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
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
        SpaceBold: ["SpaceGrotesk-Bold", "sans-serif"],
        SpaceMedium: ["SpaceGrotesk-Medium", "sans-serif"],
        SpaceSemiBold: ["SpaceGrotesk-SemiBold", "sans-serif"],
        SpaceRegular: ["SpaceGrotesk-Regular", "sans-serif"],
        DMRegular: ["DMSans-Regular", "sans-serif"],
        DMBold: ["DMSans-Bold", "sans-serif"],
        DMSemiBold: ["DMSans-SemiBold", "sans-serif"],
        DMSansLight: ["DMSans-Light", "sans-serif"],
        InterLight: ["Inter-Light", "sans-serif"],
        InterRegular: ["Inter-Regular", "sans-serif"],
        InterSemiBold: ["Inter-SemiBold", "sans-serif"],
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

  plugins: [require("flowbite/plugin")],
};
