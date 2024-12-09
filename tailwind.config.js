/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        graphik: ["var(--font-graphik)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#155EEF",
        textHead: "#101828",
        textBody: "#667085",
      },
      // backgroundImage: {
      //   home: "url('./src/app/assets/images/home/homepageBG.jpeg')",
      // },
    },
  },
  plugins: [],
};
