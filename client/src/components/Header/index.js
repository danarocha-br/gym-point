import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

import { Nav, Menu, Profile } from './styles';

export default function Header() {
  return (
    <Nav>
      <Link to="/dashboard">
        <img src={logo} alt="GymPoint" />
      </Link>

      <Menu>
        <Link to="/students">Students</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/enrollments">Enrollments</Link>
        <Link to="/help">Help</Link>
      </Menu>

      <Profile>{/* <img src="" alt=""/> */}</Profile>
    </Nav>
  );
}
