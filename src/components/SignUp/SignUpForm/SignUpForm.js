import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import DefaultInput from '../../Form/DefaultInput/DefaultInput';

const SignUpForm = ({ signUp, error }) => (
  <Form
    onSubmit={signUp}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="modal-signUp__form">
        <Field
          name="email"
          component={DefaultInput}
          type="email"
          placeholder="Email"
          divClassName="modal-signUp__input-wrap input-wrap"
          inputClassName="modal-signIn__input modal-input"
          iClassName="fa fa-user input-user"
        />
        {error && <div style={{ color: '#F05F62' }}>{error}</div>}
        <Field
          name="password"
          component={DefaultInput}
          type="password"
          placeholder="Password"
          divClassName="modal-signUp__input-wrap input-wrap"
          inputClassName="modal-signIn__input modal-input"
          iClassName="fa fa-lock input-lock"
        />
        <Field
          name="password_confirmation"
          component={DefaultInput}
          type="password"
          placeholder="Confirm Password"
          divClassName="modal-signUp__input-wrap input-wrap"
          inputClassName="modal-signIn__input modal-input"
          iClassName="fa fa-check input-check"
        />
        <p className="modal-signUp__desc">
          By clicking Sign Up, you agree to our&nbsp;
          <a href="#" className="page-link">Terms of Service&nbsp;</a>
          and&nbsp;
          <a href="#" className="page-link">Privacy Policy</a>
          .
        </p>
        <button type="submit" className="modal-submit">Sign Up</button>
      </form>
    )}
  />
);

SignUpForm.propTypes = {
  signUp: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default SignUpForm;
