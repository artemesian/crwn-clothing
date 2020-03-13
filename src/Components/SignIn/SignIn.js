import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../CustomButton/CustomButton.js'
import { signInWithGoogle, auth } from '../../Firebase/firebase.js'

import './SignIn.scss';

export default class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    
    const { password, email } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)

      this.setState({
       email:"",
       password:""
      })
    } catch (error)  {
      console.error(error)
    }
  }

  handleChange = event => {
    const { name, value } = event.target;


    this.setState({ [name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            handleChange={this.handleChange}
            value={this.state.email} 
            label="email"
            required/>
          <FormInput 
            type="password" 
            name="password" 
            handleChange={this.handleChange} 
            value={this.state.password} 
            label="password"
            required/>
          <div id="buttons">
            <CustomButton
              type="submit">
              SIGN IN
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form> 
      </div>
    )
  }
}
