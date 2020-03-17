import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';

import { toggleCartHidden } from '../../Redux/cart/cart-actions.js';
import { selectCartItemsQuantityCount } from '../../Redux/cart/cart-selectors.js'

import './CartIcon.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className="cart-icon" onClick={()=>toggleCartHidden()}>
    	<ShoppingIcon className="shopping-icon"/>
    	<span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsQuantityCount
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);