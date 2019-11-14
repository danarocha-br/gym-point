import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: white;
  padding: 35px;
  border-radius: ${props => (props.fullHeight ? '40px 40px 0 40px' : '40px')};
  display: flex;
  flex-direction: column;
  box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.03);
  width: 100%;
  height: ${props => (props.fullHeight ? 'calc(100vh - 80px)' : 'auto')};
  overflow: scroll;
`;
