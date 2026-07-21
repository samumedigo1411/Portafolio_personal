module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0D0E',
        surface: '#14181A',
        'surface-2': '#1B2022',
        border: '#262B2D',
        'border-strong': '#363C3E',
        primary: '#EDEEEC',
        secondary: '#93A19E',
        muted: '#5C6664',
        accent: '#E8A33D',
        'accent-dim': '#4A3A1E',
        'accent-2': '#6FA8B8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
