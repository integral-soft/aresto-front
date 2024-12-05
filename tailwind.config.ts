import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      height: {
        '54': '54px',
      },
      colors: {
        green: 'rgba(72, 191, 144, 1)',
        black: '#000812'
      },
      screens: {
        mobile: '640px',
        desktop: '1024px'    
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
