import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9F84BD",
        secondary: "#C09BD8",
        accent: "#EBC3DB",
        background: "#EDE3E9",
        neutral: "#E6E4CE",
      },
      borderRadius: {
        'soft': '16px',
        'soft-lg': '18px',
        'soft-sm': '14px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;