import SHOP_DATA from './SHOP_DATA.js'

const INITIAL_STATE = {
	collections: SHOP_DATA
}

export const shopReducer = ( currentState = INITIAL_STATE , action ) => {
	switch(action.type) {
		default : 
			return currentState;
	}
}