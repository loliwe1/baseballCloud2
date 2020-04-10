import React from 'react';
import PropTypes from 'prop-types';

const SignUpToggleInfo = ({ title, info }) => (
  <div className="modal-signUp__toggle-info modal-signUp__toggle-info--player">
    <div className="modal-signUp__toggle-title">
      {title}
    </div>
    <p className="modal-signUp__toggle-desc">
      {info}
    </p>
  </div>
);

SignUpToggleInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default SignUpToggleInfo;
