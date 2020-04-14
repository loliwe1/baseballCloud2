import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TopNavLogo from './TopNavLogo';
import TopNavCurrentProfile from './TopNavCurrentProfile';

const TopNav = ({
  getNetwork,
  getLeaderBoard,
  openModal,
  modalIsOpen,
  name,
  user,
}) => (
  <header className="page-header">
    {user ? (
      <>
        <NavLink to="profile">
          <TopNavLogo />
        </NavLink>

        <nav className="page-header--nav main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink
                onClick={getLeaderBoard}
                to="/leaderboards"
                className="main-nav__link "
                activeClassName="main-nav__link--active"
              >
                Leaderboards
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                onClick={getNetwork}
                to="/network"
                className="main-nav__link"
                activeClassName="main-nav__link--active"
              >
                Network
              </NavLink>
            </li>
            <TopNavCurrentProfile openModal={openModal} modalIsOpen={modalIsOpen} name={name} />
          </ul>
        </nav>
      </>
    ) : (
      <TopNavLogo />
    )}
  </header>
);

TopNav.propTypes = {
  getNetwork: PropTypes.func.isRequired,
  getLeaderBoard: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  name: PropTypes.string,
  user: PropTypes.string,
};

TopNav.defaultProps = {
  name: null,
  user: null,
};


export default TopNav;
