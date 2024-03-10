/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            segoe: ["Segoe Ui", "sans-serif"],
            arvo: ["Arvo", "sans-serif"],
        },
        container: {
            padding: "2rem",
            center: true,
        },
        extend: {
            screens: {
                xl: "1140px",
            },
            colors: {
                "c-red": "#DC3545",
                "c-blue": "#1877F2",
                "c-black": "#181717",
                "c-text": "#515152",
                "c-offWhite": "#F1F7FE",
                "c-yellow": "#FFC801",
            },
        },
    },
    plugins: [],
};
