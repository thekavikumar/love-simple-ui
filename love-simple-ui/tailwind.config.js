/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}', // Add this line for stories
    './.storybook/**/*.{js,ts,jsx,tsx}', // Include Storybook configuration files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
