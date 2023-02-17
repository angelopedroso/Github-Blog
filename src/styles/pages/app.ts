import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
});

export const Header = styled('header', {
  width: '100%',
  background:
    'radial-gradient(ellipse at top, $blueGray600, rgba(20, 88, 156, 0.27) 28%, $blueGray600)',
  padding: '4rem 0 8rem',
  display: 'flex',
  justifyContent: 'center',
});
