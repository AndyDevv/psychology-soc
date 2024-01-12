import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#0c0c10',
        'primary': '#b2adce',
        'secondary': '#3c336c',
        'accent': '#6656bf',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      textColor: {
        'primary': 'hsl(260, 7%, 92%)',
        'secondary': '#BECFC2',
        'accent': '#6656bf',
      }
    },
  },
  plugins: [],
} satisfies Config

