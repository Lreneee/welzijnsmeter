/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                "avenirnext-regular": ["avenirnext-regular", "sans-serif"],
                "avenirnext-bold": ["avenirnext-bold", "sans-serif"],
                "avenirnext-medium": ["avenirnext-medium", "sans-serif"],
                "avenirnext-demi": ["avenirnext-demi", "sans-serif"],
                "avenirnext-heavy": ["avenirnext-heavy", "sans-serif"],
                "badscipt-regular": ["badscript-regular", "sans-serif"],
            },
            backgroundImage: {
                background: "url('../../resources/js/images/background.png')",
            },
            colors: {
                "darker-green": "#D0DAB4",
                "light-green": "#EFF8D5",
                "og-red": "#C93E5C"
            }
        },
    },
  plugins: [],
}
