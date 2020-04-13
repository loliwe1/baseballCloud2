import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import DefaultInput from '../../Form/DefaultInput/DefaultInput';
import {
  required,
  minPassLength,
  composeValidators,
} from '../../../assets/validations';


const SignUpForm = ({ signUp, error, clearError }) => (
  <Form
    onSubmit={signUp}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="modal-signUp__form">
        <Field
          name="email"
          component={DefaultInput}
          validate={required}
          onChange={clearError}
          type="email"
          placeholder="Email"
          iconType="user"
        />
        {error && <div style={{ color: '#F05F62', marginBottom: '12px', fontSize: '16px' }}>{error}</div>}
        <Field
          name="password"
          component={DefaultInput}
          validate={composeValidators(required, minPassLength)}
          type="password"
          placeholder="Password"
          iconType="lock"
        />
        <Field
          name="password_confirmation"
          component={DefaultInput}
          type="password"
          placeholder="Confirm Password"
          iconType="check"
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
  clearError: PropTypes.func.isRequired,
};

export default SignUpForm;
