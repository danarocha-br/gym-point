import posed from 'react-pose';
import styled from 'styled-components';

export const ModalWrapper = posed.div({
  enter: {
    x: 0,
    color: 'white',
    opacity: 1,
    position: 'fixed',
    top: '100px',
    right: 0,
    height: '100%',
    width: '500px',
    padding: '30px',
    zIndex: 1,
    delay: 1000,
    transition: {
      x: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});
export const ModalWrapperMob = posed.div({
  enter: {
    x: 0,
    color: 'var(--color-purple)',
    opacity: 1,
    position: 'fixed',
    top: '45px',
    right: 0,
    height: '100%',
    width: '100%',
    padding: '20px',
    zIndex: 1,
    delay: 1000,
    transition: {
      x: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

export const Overlay = posed.div({
  enter: {
    opacity: 0.1,
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'black',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
  },
  exit: { opacity: 0 },
});

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  button {
    margin-top: 30px;
  }
`;
