/** @type {import('tailwindcss').Config} */
import typographyPlugin from '@tailwindcss/typography';
import formsPlugin from '@tailwindcss/forms';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,jsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '40rem'},    // 640px - Small devices
      'md': {'max': '64rem'},    // 1024px - Medium devices
      'lg': {'min': '64.01rem'}, // 1024px+ - Large devices
    },
    extend: {
      colors: {
        bg: 'rgb(255, 255, 255)',
        text: 'rgb(65, 78, 92)',
        textDark: 'rgb(107, 106, 106)',
        textLight: 'rgb(50, 50, 50)',
        textDarker: 'rgb(168, 168, 168)',
        buttonBg: 'rgb(245, 245, 245)',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier', 'monospace'],
      },
      fontSize: {
        'xs': ['calc(16px*0.5*1.5)', { lineHeight: '1.4' }], // --fontSizeExtraSmall
        'sm': ['calc(16px*0.5*1.75)', { lineHeight: '1.4' }], // --fontSizeSmall
        'base': ['calc(16px*0.5*2)', { lineHeight: '1.4' }], // --fontSizeMedium
        'lg': ['calc(16px*0.5*2.25)', { lineHeight: '1.4' }], // --fontSizeLarge
        'xl': ['calc(16px*0.5*4.5)', { lineHeight: '1.4' }], // --fontSizeExtraLarge
      },
      spacing: {
        'unit': 'calc(16px*0.5)',
        'unit-1.5': 'calc(16px*0.5*1.5)',
        'unit-3': 'calc(16px*0.5*3)',
        'unit-4': 'calc(16px*0.5*4)',
        'unit-4.5': 'calc(16px*0.5*4.5)',
        'unit-6.375': 'calc(16px*0.5*6.375)',
        'unit-8': 'calc(16px*0.5*8)',
        'unit-10': 'calc(16px*0.5*10)',
        'unit-12.75': 'calc(16px*0.5*12.75)',
        'unit-16': 'calc(16px*0.5*16)',
        'unit-18': 'calc(16px*0.5*18)',
        'unit-22': 'calc(16px*0.5*22)',
        'unit-31': 'calc(16px*0.5*31)',
      },
      letterSpacing: {
        'custom': '0.02em',
      },
      lineHeight: {
        'small-text': '145%',
      },
      animation: {
        wiggle: 'wiggle 500ms ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(5deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
    },
  },
  plugins: [
    typographyPlugin,
    formsPlugin,
  ],
}