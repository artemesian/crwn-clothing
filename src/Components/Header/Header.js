import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../Firebase/firebase.js';

import { ReactComponent as Logo } from '../../Assets/crown.svg';

import './Header.scss';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/" >
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGNOUT</div>
          :
          <Link className="option" to="/signin">SIGNIN</Link>
        }
      </div>
    </div>  
  )
}

export default Header;