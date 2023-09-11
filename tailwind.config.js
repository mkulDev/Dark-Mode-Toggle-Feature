/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primaryDark: 'var(--primary-darker)',
        primaryLight: 'var(--primary-lighter)',
        bgPrimary: 'var(--bg-primary)',
        bgSecondary: 'var(--bg-secondary)',
        bgTertiary: 'var(--bg-tertiary)',
        colorBase1: 'var(--text-primary)',
        colorBase2: 'var(--text-secondary)',
        colorBase3: 'var(--text-tertiary)'
      }
    }
  },
  plugins: []
}
