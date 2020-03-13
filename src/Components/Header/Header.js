import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../Firebase/firebase.js';

import { ReactComponent as Logo } from '../../Assets/crown.svg';

import './Header.scss';

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/" >
          <Logo className="logo"/>
        </Link>
        <div className="options">
          <Link className="option" to="/shop">SHOP</Link>
          <Link className="option" to="/contact">CONTACT</Link>
          {
            this.props.currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGNOUT</div>
            :
            <Link className="option" to="/signin">SIGNIN</Link>
          }
        </div>
      </div>  
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);