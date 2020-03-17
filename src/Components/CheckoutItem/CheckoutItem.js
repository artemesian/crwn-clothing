import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../Redux/cart/cart-actions.js';
import { addItem } from '../../Redux/cart/cart-actions.js';
import { removeItem } from '../../Redux/cart/cart-actions.js';

import './CheckoutItem.scss';

const CheckoutItem = ({cartItem, clearItemFromCart,removeItem,addItem}) => {
  const  { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
    	<div className="image-container">
    		<img src={imageUrl} alt="item"/>
    	</div>

    	<div className="name">{name}</div>
    	<div className="quantity">
    		<span className="arrow" onClick={()=>
    			removeItem(cartItem)}>&#10094;</span> 
    		<span className="value">{quantity}</span> 
    		<span className="arrow"onClick={()=>
    			addItem(cartItem)}>&#10095;</span> 
    	</div>
    	<div className="price">{price}</div>
    	<div className="remove-button" onClick={()=> clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
	clearItemFromCart: (item)=> dispatch(clearItemFromCart(item)),
	addItem: (item)=> dispatch(addItem(item)),
	removeItem: (item)=> dispatch(removeItem(item)),	
})

export default connect(null,mapDispatchToProps)(CheckoutItem);