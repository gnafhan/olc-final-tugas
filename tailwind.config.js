module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to all your JS/TSX files
    // Add other paths here if you have HTML or other types of files where you use Tailwind classes
  ],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "emerald"],
  },
}