import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import { Form, Field } from 'react-final-form';
import DefaultInput from '../Form/DefaultInput/DefaultInput';

const LogIn = ({ signIn, error }) => (
  <main className="login-page">
    <h1 className="visually-hidden">
      BaseballCloud app
    </h1>

    <div className="modal-signIn">
      <header className="modal-signIn__header">
        <h2 className="modal-signIn__title">
          Welcome to BaseballCloud
        </h2>
        <p className="modal-signIn__desc">
          Sign into your account here:
        </p>
      </header>

      <Form
        onSubmit={signIn}
        render={({ handleSubmit }) => (
          <form className="modal-signIn__form" onSubmit={handleSubmit}>
            <Field
              name="email"
              component={DefaultInput}
              type="email"
              placeholder="Email"
              iconType="user"
            />
            <Field
              name="password"
              component={DefaultInput}
              type="password"
              placeholder="Password"
              iconType="lock"
            />
            {error && <div style={{ color: '#F05F62' }}>{error}</div>}
            <button type="submit" className="modal-submit">Sign In</button>
          </form>
        )}
      />
      <a href="#" className="modal-signIn__help-link page-link">
        Forgotten password?
      </a>
      <p className="modal-signIn__desc">
        Dont have an account?
        <Link to="/signUp" className="modal-signIn__signUp-link">Sign Up</Link>
      </p>
    </div>
  </main>
);

LogIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  error: PropTypes.string,
};

LogIn.defaultProps = {
  error: '',
};

export default LogIn;
