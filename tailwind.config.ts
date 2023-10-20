import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        fredoka: ["Fredoka One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        BodoniModa : ["Bodoni Moda" , "sans-serif"],
        acme: ["Acme", "sans-serif"],
        "bruno-ace-sc": ["Bruno Ace SC", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        raleway: ["Raleway", "sans-serif"],
        Diphylleias: ["Diphylleia", "sans-serif"],
        Moirai: ["Moirai+One"],
        Montserrat: ["Montserrat", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        CinzelDecorative: ["Cinzel Decorative", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
