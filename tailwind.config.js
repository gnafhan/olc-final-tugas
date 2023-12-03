module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to all your JS/TSX files
    // Add other paths here if you have HTML or other types of files where you use Tailwind classes
  ],
  theme: {
    extend: {
      // Extend Tailwind theme here
      // For example, you can add custom colors, fonts, etc.
    },
  },
  plugins: [
    // Add any Tailwind plugins you'd like to use here
  ],
}