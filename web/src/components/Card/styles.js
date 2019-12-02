import styled from 'styled-components';
import { fluidRange } from 'polished';

export const CardWrapper = styled.div`
  background-color: white;
  ${fluidRange(
    {
      prop: 'padding',
      fromSize: '20px',
      toSize: '35px',
    },
    '320px',
    '991px'
  )}
  border-radius: ${props => (props.fullHeight ? '25px 25px 0 25px' : '25px')};
  display: flex;
  flex-direction: column;
  box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.03);
  width: 100%;
  height: ${props => (props.fullHeight ? 'calc(100vh - 80px)' : 'auto')};
  overflow: scroll;

  @media (min-width: 991px) {
    border-radius: ${props => (props.fullHeight ? '40px 40px 0 40px' : '40px')};
  }
`;
