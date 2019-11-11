import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '~/assets/logo.svg';
import { Nav, Menu, Profile, ProfileList } from './styles';

export default function Header() {
  const [visible, setVisibility] = useState(false);

  const profile = useSelector(state => state.user.profile);

  function handleToogleProfile() {
    setVisibility(!visible);
  }

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

      <Profile onClick={handleToogleProfile}>
        <img src={profile.avatar.url} alt="" />
        <ProfileList visible={visible}>
          <li>{profile.name}</li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ProfileList>
      </Profile>
    </Nav>
  );
}
