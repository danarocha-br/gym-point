import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 20px 25px 40px;
  margin-bottom: 15px;
  border-radius: 0 20px 20px 0;
  border: 1px dashed #536cfa6b;
  position: relative;
  left: -42px;

  &:hover {
    background-color: #ffffff05;
  }
`;

export const Label = styled.p`
  color: #9daaf0;
  font-size: 16px;
  font-weight: 500;
`;

export const Data = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 500;
`;
