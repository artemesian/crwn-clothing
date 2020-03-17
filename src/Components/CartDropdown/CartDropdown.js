import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import CustomButton from '../CustomButton/CustomButton.js';
import CartItem from '../CartItem/CartItem.js';

import { selectCartItems } from '../../Redux/cart/cart-selectors.js'
import { toggleCartHidden } from '../../Redux/cart/cart-actions.js';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
    	<div className="cart-items">
    		{
    			cartItems.length ? 
    			cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
    			:
    			<span className="empty-message"> Your cart is empty </span>
    		}
    	</div>
    	<CustomButton onClick={()=>{
            history.push('/checkout')
            dispatch(toggleCartHidden())
          }
        }>
    		GO TO CHECKOUT
    	</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));