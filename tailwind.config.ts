import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: `var(--primary)`,
        secondary: `var(--secondary)`,
        border: `var(--border)`,
        background: `var(--background)`,
        text: `var(--text)`,
        accent: `var(--accent)`,
        "nav-bg": `var(--nav-bg)`,
      },
      fontFamily: {
        tiny5: ["var(--font-tiny5)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
