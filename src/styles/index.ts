import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      babyBlue: '#3294F8',
      gray100: '#E7EDF4',
      gray200: '#C4D4E3',
      gray300: '#AFC2D4',
      gray400: '#7B96B2',
      blueGray300: '#3A536B',
      blueGray400: '#1C2F41',
      blueGray500: '#112131',
      blueGray600: '#0B1B2B',
      blueGray700: '#071422',
      blueGray800: '#040F1A',
    },
    fontSizes: {
      sm: '.75rem',
      '2sm': '.875rem',
      md: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
    },
  },
});
