import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
});

export const Header = styled('header', {
  width: '100%',
  background: 'linear-gradient(to bottom, #000 10%, $blueGray600 100%)',
  padding: '4rem 0 8rem',
  display: 'flex',
  justifyContent: 'center',
});
