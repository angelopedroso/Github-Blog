import { styled } from '..';

export const HomeContainer = styled('main', {
  width: '100%',
  maxWidth: '54rem',
  display: 'flex',
  flexDirection: 'column',
});

export const SearchContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem',
  marginTop: '4.5rem',

  'input[type = text]': {
    fontSize: '$md',
    border: '1px solid $blueGray400',
    borderRadius: 6,
    background: '$blueGray800',
    padding: '.75rem 1rem',
    color: '$gray100',

    '&::placeholder': {
      color: '$blueGray300',
    },
  },
});

export const SearchHeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$2sm',

  h2: {
    fontSize: '$xl',
    fontWeight: 'bold',
  },

  span: {
    color: '$gray400',
  },
});

export const PostContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
  margin: '3rem 0',
});

export const PostCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.25rem',
  background: '$blueGray500',
  borderRadius: 10,
  padding: '2rem',
  border: '2px solid transparent',
  cursor: 'pointer',

  p: {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: 1.6,
    color: '$gray300',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
  },

  '&:hover': {
    borderColor: '$blueGray300',
  },
});

export const PostCardHeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  h2: {
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$xl',
  },

  span: {
    fontSize: '$2sm',
    color: '$gray400',
    whiteSpace: 'nowrap',
  },
});
