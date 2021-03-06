import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUpTabs from './SignUpTabs';
import SignUpToggleInfo from './SignUpToggleInfo/SignUpToggleInfo';
import {
  PLAYER_TITLE,
  PLAYER_INFO,
  SCOUT_TITLE,
  SCOUT_INFO,
} from '../../utils/constants';
import SignUpForm from './SignUpForm/SignUpForm';

const SignUp = ({
  signUp,
  error,
  role,
  changeActiveTab,
  clearError,
}) => (
  <main className="login-page">
    <div className="modal-signUp">
      <header className="modal-signUp__header">

        <SignUpTabs changeActiveTab={changeActiveTab} role={role} />
        {role === 'player' && (
          <SignUpToggleInfo title={PLAYER_TITLE} info={PLAYER_INFO} />
        )}
        {role === 'scout' && (
          <SignUpToggleInfo title={SCOUT_TITLE} info={SCOUT_INFO} />
        )}

      </header>

      <SignUpForm signUp={signUp} error={error} clearError={clearError} />

      <p className="modal-signUp__singIn-desc">
        Already registered?
        <Link to="/logIn" className="modal-signUp__signIn-link">Sign In</Link>
      </p>
    </div>
  </main>
);

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  error: PropTypes.string,
  role: PropTypes.string.isRequired,
  changeActiveTab: PropTypes.func.isRequired,
  clearError: PropTypes.func,
};

SignUp.defaultProps = {
  error: '',
  clearError: () => {},
};

export default SignUp;
