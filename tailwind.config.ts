import type { Config } from "tailwindcss";
import primaryColors from "./colors";

const config: Config = {
primaryColors,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: primaryColors['mBg'],
        foreground: "var(--foreground)",
        primary: primaryColors['mGreen'],
        secondary: primaryColors['mGray']
      },
    },
  },
  plugins: [],
};
export default config;
