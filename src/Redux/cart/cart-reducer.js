import cartActionTypes from './cart-types.js';
import { addCartItem, removeCartItem } from './cart-utils.js';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
}

export const cartReducer = (currentState=INITIAL_STATE, action={}) => {
	
	switch(action.type) {
			case cartActionTypes.TOGGLE_CART_HIDDEN:
				return ({
					...currentState,
					hidden:!currentState.hidden
				})
			case cartActionTypes.ADD_ITEM:
				return ({
					...currentState,
					cartItems: addCartItem( currentState.cartItems, action.payload )
				})
			case cartActionTypes.CLEAR_ITEM_FROM_CART:
				return ({
					...currentState,
					cartItems: currentState.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
				})
			case cartActionTypes.REMOVE_ITEM:
				return ({
					...currentState,
					cartItems: removeCartItem(currentState.cartItems, action.payload)
				})
			default:
				return currentState;
		}	
}
