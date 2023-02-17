import { styled } from '..';

export const HomeContainer = styled('main', {
  width: '100%',
  maxWidth: '54rem',
  display: 'flex',
  flexDirection: 'column',
});

export const CardProfileContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '2rem',
  padding: '2rem 2.5rem',
  borderRadius: 10,
  background: '$blueGray600',
  marginTop: '-5rem',
  boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',

  img: {
    borderRadius: 8,
    objectFit: 'cover',
  },
});

export const CardProfileInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  p: {
    marginTop: '0.5rem',
    lineHeight: 1.6,
  },
});

export const CardProfileNameContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h1: {
    color: '$gray100',
  },

  a: {
    textDecoration: 'none',
    color: '$babyBlue',
  },
});

export const CardProfileAboutContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '1.5rem',
  marginTop: '1.5rem',

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',

    svg: {
      color: '$blueGray300',
      width: 18,
      height: 18,
    },
  },
});
