import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../CustomButton/CustomButton.js';
import CartItem from '../CartItem/CartItem.js';

import { selectCartItems } from '../../Redux/cart/cart-selectors.js'

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
    	<div className="cart-items">
    		{
    			cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
    		}
    	</div>
    	<CustomButton>
    		GO TO CHECKOUT
    	</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);