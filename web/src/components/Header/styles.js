import styled from 'styled-components';
import { fluidRange } from 'polished';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  ${fluidRange(
    {
      prop: 'margin-bottom',
      fromSize: '5px',
      toSize: '15px',
    },
    '320px',
    '991px'
  )}
  ${fluidRange(
    {
      prop: 'padding-left',
      fromSize: '10px',
      toSize: '0px',
    },
    '320px',
    '991px'
  )}
  padding-right: 40px;

  @media (max-width: 991px) {
    img {
      width: 80%;
    }
    padding-right: 10px;
  }
`;

export const Menu = styled.div`
  display: flex;
  padding-top: 5px;

  @media (min-width: 992px) {
    margin-left: -24%;
  }

  @media (max-width: 991px) {
    font-size: 14px;
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: var(--color-purple);
    box-shadow: -1px -4px 32px 0px rgba(0, 0, 0, 0.15);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  a {
    padding: 0 7px;
    color: white;
    opacity: 0.4;
    font-weight: 500;
    transition: all 1s;

    &::after {
      content: '';
      background-color: var(--color-primary);
      display: block;
      position: relative;
      top: 10px;
      left: 0px;
      width: 0px;
      height: 3px;
      border-radius: 5px;
      transition: width 0.3s;
    }

    &:hover {
      color: white;
      opacity: 1;

      &::after {
        width: 30px;
      }
    }

    @media (min-width: 991px) {
      padding: 0 20px;
    }
  }

  .is-active {
    color: white;
    opacity: 1;

    &::after {
      content: '';
      background-color: var(--color-primary);
      display: block;
      position: relative;
      top: 10px;
      left: 0px;
      width: 30px;
      height: 3px;
      border-radius: 5px;
    }
  }
`;

export const Profile = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  top: -8px;
  right: 0;
  border: 0;
  background: none;

  img {
    width: 41px;
    height: 41px;
    border-radius: 10px;
    border: 3px solid #ffffff99;
  }
`;

export const ProfileList = styled.ul`
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  width: 180px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 1px 15px 18px rgba(0, 0, 0, 0.1);
  display: ${props => (props.visible ? 'block' : 'none')};
  z-index: 2;

  li {
    padding: 8px 20px;
    border-bottom: 1px solid var(--color-grey-light);
    color: var(--color-primary);

    &:hover {
      background-color: #f8f5fe;
    }

    a {
      color: var(--color-primary);
    }

    &:last-child:hover {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }

    &:last-child,
    &:first-child {
      padding-top: 15px;
      padding-bottom: 20px;
    }

    &:first-child {
      color: white;
      font-weight: 500;
      padding-top: 20px;
      background-color: var(--color-primary);
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      border-bottom: 0;
    }
    &:last-child {
      border-bottom: none;
    }

    &:nth-child(2) {
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
`;
