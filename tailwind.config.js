/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nude: "#F5F5F0",
                forest: "#3F6212",
                amber: "#D97706",
                stone: "#78716C",
                dark: "#1C1917",
            },
            fontFamily: {
                display: ['"Space Grotesk"', "sans-serif"],
                body: ['"Inter"', "sans-serif"],
                architect: ['"Architects Daughter"', "cursive"],
                orbitron: ['"Orbitron"', "sans-serif"],
            },
        },
    },
    plugins: [],
}
