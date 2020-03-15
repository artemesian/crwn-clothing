import cartActionTypes from './cart-types.js';

const INITIAL_STATE = {
	hidden: true
}

export const cartReducer = (currentState=INITIAL_STATE, action={}) => {
	
	switch(action.type) {
			case cartActionTypes.TOGGLE_CART_HIDDEN:
				return ({
					...currentState,
					hidden:!currentState.hidden
				})
			default:
				return currentState;
		}	
}
