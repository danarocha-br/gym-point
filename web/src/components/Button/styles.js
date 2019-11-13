import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonWrapper = styled.button`
  color: white;
  font-weight: 600;
  background-color: var(--color-primary);
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
    background-color: ${darken(0.05, '#EE4D64')};
  }
`;
