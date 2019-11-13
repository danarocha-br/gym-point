import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: white;
  padding: 35px 35px 130px 35px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.03);
  width: 100%;
  height: ${props => (props.fullHeight ? '100%' : 'auto')};
  overflow: scroll;
`;
