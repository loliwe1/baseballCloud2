import React from 'react';
import PropTypes from 'prop-types';
import SignUpTabsItem from '../SignUpTabsItem';
import { PLAYER_NAME, SCOUT_NAME } from '../../../utils/constants';

const SignUpTabs = ({ changeActiveTab, role }) => (
  <div className="modal-signUp__toggle-block">
    <SignUpTabsItem
      name={PLAYER_NAME}
      role={role}
      active="player"
      changeActiveTab={changeActiveTab}
    />
    <SignUpTabsItem
      name={SCOUT_NAME}
      changeActiveTab={changeActiveTab}
      role={role}
      active="scout"
    />
  </div>
);

SignUpTabs.propTypes = {
  changeActiveTab: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
};


export default SignUpTabs;
