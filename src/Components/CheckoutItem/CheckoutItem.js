import React from 'react';
import { connect } from 'react-redux';

import './CheckoutItem.scss';

const CheckoutItem = ({cartItem: { name, imageUrl, price, quantity }}) => {
  return (
    <div className="checkout-item">
    	<div className="image-container">
    		<img src={imageUrl} alt="item"/>
    	</div>

    	<div className="name">{name}</div>
    	<div className="quantity">{quantity}</div>
    	<div className="price">{price}</div>
    	<div className="remove">&#10005;</div>
    </div>
  )
}

export default CheckoutItem;