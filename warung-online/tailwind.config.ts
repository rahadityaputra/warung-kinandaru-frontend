import type { Config } from "tailwindcss";



const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '1px',
      }
    }
  }
}
module.exports = config;
