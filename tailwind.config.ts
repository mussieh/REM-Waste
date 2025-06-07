/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#F9FAFB",
                buttonSelected: "#12B981",
                buttonUnSelected: "#D1D5DB",
                warningBackground: "#FEF3C7",
                warningIcon: "#F49D00",
                headerColor: "#1F2937",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
