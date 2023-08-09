/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    listStyleType: {
      square: "square",
    },
    extend: {
      colors: {
        redPantone: "#E63946",
        honeydew: "#F1FAEE",
        nonPhotoBlue: "#A8DADC",
        ceruleanCrayola: "#457B9D",
        berkeleyBlue: "#1D3557",
        sage: "#CCD5AE",
        mintCream: "#E9EDC9",
        floralWhite: "#FEFAE0",
        champagne: "#FAEDCD",
        rawSienna: "#D4A373",
      },
    },
  },
  plugins: [],
};
