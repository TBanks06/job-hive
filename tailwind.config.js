module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        'job-card-gradient': 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};