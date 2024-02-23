import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '128': '32rem',
        '152': '39rem',
      },
      colors: {
        'phi-templater-light-purple': '#c498d4',
        'phi-templater-dark-purple': '#a539ca',
      },
    },
  },
  plugins: [],
};
export default config;
