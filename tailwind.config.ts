import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#242247',
        'primary': '#2e2c54',
        'secondary': '#393760',
        'accent': '#8971e6',
        'error': "#e85d75",
        'icon': '#8870e6',
        'search': '#49476d',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      textColor: {
        'bg': '#0c0c10',
        'primary': 'hsl(260, 7%, 92%)',
        'secondary': '#797992',
        // 'accent': '#6656bf',
      }
    },
  },
  plugins: [],
} satisfies Config

