import React from 'react';
import PropTypes from 'prop-types';
import ProfileModal from '../ProfileModal';

const TopNavCurrentProfile = ({ name, openModal, modalIsOpen }) => (
  <li className="main-nav__item main-nav__item--user">
    <i className="fa fa-user-circle-o fa-2x main-nav__user-pic" aria-hidden="true" />
    <button type="button" className="main-nav__user-control" style={{ color: '#667784' }} onClick={openModal}>
      {name || 'Profile Name'}
    </button>
    {modalIsOpen && <ProfileModal openModal={openModal} />}
  </li>
);

TopNavCurrentProfile.propTypes = {
  openModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

TopNavCurrentProfile.defaultProps = {
  name: null,
};


export default TopNavCurrentProfile;
