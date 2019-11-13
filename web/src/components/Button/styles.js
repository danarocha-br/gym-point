import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonWrapper = styled.button`
  color: ${props =>
    props.color === 'transparent' ? 'var(--color-blue)' : 'white'};
  font-weight: 600;
  background-color: ${props =>
    props.color === 'transparent' ? '#fff0' : 'var(--color-primary)'};
  opacity: ${props => (props.isDisabled ? 0.5 : 1)};
  height: 50px;
  width: ${props => (props.kind === 'icon' ? '50px' : '100%')};
  border-radius: 13px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s ease-out;

  &:hover {
    color: ${props =>
      props.color === 'transparent' ? darken(0.05, '#282331') : ''};
    background-color: ${props =>
      props.color === 'transparent' ? '' : darken(0.05, '#EE4D64')};
  }
`;
