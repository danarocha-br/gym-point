import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '~/assets/logo.svg';
import { Nav, Menu, Profile, ProfileList } from './styles';
import { signOut } from '~/store/actions';

export default function Header() {
  const [visible, setVisibility] = useState(false);

  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleToogleProfile() {
    setVisibility(!visible);
  }

  function handleSignOut() {
    dispatch(signOut());
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
        <Link to="/help-orders">Help</Link>
      </Menu>

      <Profile onClick={handleToogleProfile}>
        <img src={profile.avatar.url} alt="" />
        <ProfileList visible={visible}>
          <li>{profile.name}</li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
          <li onClick={handleSignOut}>
            <Link>Logout</Link>
          </li>
        </ProfileList>
      </Profile>
    </Nav>
  );
}
