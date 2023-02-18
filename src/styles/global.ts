import { globalCss } from '.';

export const UniversalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$blueGray700',
    color: '$gray200',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body::-webkit-scrollbar': {
    display: 'none',
  },

  ':focus': {
    outline: '$babyBlue solid 1.5px',
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito',
    fontWeight: 400,
  },
});
