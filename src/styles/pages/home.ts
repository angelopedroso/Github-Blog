import { css, styled } from '..';

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

export const PostHomeContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
  margin: '3rem 0',
  height: '34.5rem',

  a: {
    textDecoration: 'none',
  },
});

export const PostCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.25rem',
  background: '$blueGray500',
  borderRadius: 10,
  padding: '2rem',
  border: '2px solid transparent',
  cursor: 'pointer',
  minHeight: '16.25rem',
  textAlign: 'left',

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
    transition: 'border-color 0.2s ease-in-out',
  },
});

export const PostCardHeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',

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

export const pagination = css({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  fontWeight: 'bold',
  marginBottom: '3rem',

  li: {
    cursor: 'pointer',
    borderRadius: 6,
    background: '$blueGray500',

    '&:hover': {
      background: '$babyBlue',
      transition: 'background-color 0.2s ease-out',
    },

    a: {
      display: 'flex',
      padding: '0.5rem 1rem',
    },
  },

  'li:first-child, li:last-child': {
    background: 'transparent',

    '&:hover': {
      color: '$babyBlue',
      transition: 'color 0.2s ease-out',
    },
  },

  '.selected': {
    background: '$babyBlue',
  },
});
