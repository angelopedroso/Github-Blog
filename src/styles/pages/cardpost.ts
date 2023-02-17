import { styled } from '..';

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 2.5rem',
  borderRadius: 10,
  background: '$blueGray600',
  marginTop: '-5rem',
  boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
});

export const CardHeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  a: {
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
    fontSize: '$sm',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderTop: '2px solid transparent',
    borderBottom: '2px solid transparent',
    color: '$babyBlue',

    '&:hover': {
      borderBottomColor: '$babyBlue',
    },
  },
});

export const CardDescriptionContainer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',
  marginTop: '1.25rem',

  h1: {
    color: '$gray100',
  },
});

export const CardPostDetails = styled('div', {
  display: 'flex',
  gap: '1.5rem',

  h1: {
    color: '$gray100',
    fontSize: '$3xl',
    fontWeight: 'bold',
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    color: '$gray400',

    svg: {
      color: '$blueGray300',
      width: 18,
      height: 18,
    },
  },
});
