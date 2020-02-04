import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  SignInSubTitle,
} from './sign-in.styles';

export const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCreds, setUserCreds] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCreds;

  const handleSubmit = async event => {
    event.preventDefault();
    await emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCreds({ ...userCreds, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <SignInSubTitle>Sign in with your email and password</SignInSubTitle>

      <form id='form' onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          aria-label='Email'
          autoComplete='username'
          aria-required='true'
          data-testid='email-input'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          aria-label='Password'
          autoComplete='current-password'
          aria-required='true'
          data-testid='password-input'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

SignIn.propTypes = {
  emailSignInStart: PropTypes.func.isRequired,
  googleSignInStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  googleSignInStart,
  emailSignInStart: (email, password) => emailSignInStart({ email, password }),
};

export default connect(null, mapDispatchToProps)(SignIn);
