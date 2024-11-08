import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {  // Corrected from 'color' to 'colors'
        accent: "#FF8F9C",
        blackish: "#a1b1b1",  // Corrected invalid hex code
      },
     
    },
  },
  plugins: [],
};

export default config;
