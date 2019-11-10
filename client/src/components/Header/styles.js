import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-bottom: 50px;
`;

export const Menu = styled.div`
  display: flex;
  padding-top: 5px;

  a {
    padding: 0 20px;
    color: var(--color-grey-dark);
  }
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: black;
`;
