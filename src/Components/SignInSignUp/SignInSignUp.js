import React from "react";

import SignIn from '../SignIn/SignIn.js'
import SignUp from '../SignUp/SignUp.js'

import './SignInSignUp.scss';

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default SignInSignUp;