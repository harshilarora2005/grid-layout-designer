const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    theme: {
        extend: {
            fontFamily: {
            sans: ["poppins", "sans-serif"],
            },
            colors: {
            red: "#E97451",
            green: "#87ab69",
            },
        },
        },
        plugins: [],
});  