import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/style.css';
import { Form, Field } from 'react-final-form';
import DefaultInput from '../Form/DefaultInput/DefaultInput';


const LogIn = ({signIn, saveEmail}) => (
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
          render = {({handleSubmit}) => (
            <form className="modal-signIn__form" onSubmit={handleSubmit}>
              <Field 
                name = 'email'
                component={DefaultInput}
                type={'email'}
                placeholder={"Email"}
                divClassName={"modal-signIn__input-wrap input-wrap"}
                inputClassName={"modal-signIn__input modal-input"}
                iClassName={"fa fa-user input-user"}
                onChange={saveEmail}
                />
              <Field
                name='password'
                component={DefaultInput}
                type={'password'}
                placeholder={"Password"}
                divClassName={"modal-signIn__input-wrap input-wrap"}
                inputClassName={"modal-signIn__input modal-input"}
                iClassName={"fa fa-lock input-lock"}
              />
              <button type="submit" className="modal-submit">Sign In</button>
            </form>
          )}
        />
        <a href="#" className="modal-signIn__help-link page-link">
          Forgotten password?
        </a>
        <p className="modal-signIn__desc">
          Dont have an account?

          <Link to ='/signUp' className="modal-signIn__signUp-link">Sign Up</Link>
        </p>
      </div>
    </main>
);

export default LogIn;