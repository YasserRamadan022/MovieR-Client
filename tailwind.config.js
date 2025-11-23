/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        'charcoal': '#0f172a',
        'slate-dark': '#1e293b',
        'steel-blue': '#475569',
        'border-dark': '#1e293b',
        'text-soft': '#f8fafc',
      },
    },
  },
  plugins: [],
}