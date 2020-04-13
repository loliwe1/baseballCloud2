import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileModal = ({ setRef, getCurrentProfile, logOut }) => (
  <div ref={setRef} className="main-nav__dropdown">
    <Link onClick={getCurrentProfile} to="/profile" className="main-nav__dropdown-link">My Profile</Link>
    <Link onClick={logOut} to="/logIn" className="main-nav__dropdown-link">Log Out</Link>
  </div>
);

ProfileModal.propTypes = {
  setRef: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

export default ProfileModal;
