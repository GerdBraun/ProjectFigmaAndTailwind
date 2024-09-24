/** @type {import('tailwindcss').Config} */

/**
 * color scheme extracted from hero image using https://color.adobe.com/de/create/image
 * #A60321
 * #6E8C03
 * #D98E04
 * #BF4904
 * #26140D
 * and exported via https://uicolors.app/create 
 */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#1d4ed8',
          '800': '#1e40af',
          '900': '#1e3a8a',
          '950': '#172554'
        },
        'mexican-red': {
          '50': '#fff0f3',
          '100': '#ffdde3',
          '200': '#ffc0cc',
          '300': '#ff95a9',
          '400': '#ff5776',
          '500': '#ff244c',
          '600': '#fe0432',
          '700': '#d70028',
          '800': '#a60321',
          '900': '#920a23',
          '950': '#50000f',
        },
        'olive-drab': {
          '50': '#feffe4',
          '100': '#faffc6',
          '200': '#f3ff93',
          '300': '#e6ff54',
          '400': '#d6fa21',
          '500': '#b7e002',
          '600': '#8eb400',
          '700': '#6e8c03',
          '800': '#556b09',
          '900': '#475a0d',
          '950': '#253300',
        },
        'geebung': {
          '50': '#fefbe8',
          '100': '#fef7c3',
          '200': '#feed8a',
          '300': '#fddb47',
          '400': '#fac515',
          '500': '#eaac08',
          '600': '#d98e04',
          '700': '#a15e07',
          '800': '#854a0e',
          '900': '#713c12',
          '950': '#421e06',
        },
        'rock-spray': {
          '50': '#fff8ec',
          '100': '#fff0d3',
          '200': '#ffdea6',
          '300': '#ffc56e',
          '400': '#ffa134',
          '500': '#ff840c',
          '600': '#f36803',
          '700': '#bf4904',
          '800': '#a03d0c',
          '900': '#81340d',
          '950': '#461804',
        },
        'wood-bark': {
          '50': '#f9f6ed',
          '100': '#f2eacf',
          '200': '#e6d4a2',
          '300': '#d8b56c',
          '400': '#cb9b44',
          '500': '#bb8737',
          '600': '#a16a2d',
          '700': '#814e27',
          '800': '#6d4127',
          '900': '#5d3826',
          '950': '#26140d',
        },

      }
    },
    fontFamily: {
      'body': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
    }
  }
}