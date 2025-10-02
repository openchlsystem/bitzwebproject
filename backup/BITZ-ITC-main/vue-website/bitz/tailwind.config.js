/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#1F1E5C',
          100: '#1F1E5C',
          200: '#1F1E5C',
          300: '#1F1E5C',
          400: '#1F1E5C',
          500: '#1F1E5C',
          600: '#1F1E5C',
          700: '#1F1E5C',
          800: '#1F1E5C',
          900: '#1F1E5C',
          950: '#1F1E5C',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      }
    },
  },
  plugins: [],
}