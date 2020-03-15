import userActionTypes from './user-types.js';

const INITIAL_STATE = {
	currentUser: null
}

export const userReducer = (currentState=INITIAL_STATE, action={}) => {
	
	switch(action.type) {
			case userActionTypes.SET_CURRENT_USER:
				return ({...currentState, currentUser: action.payload })
			default:
				return currentState;
		}	
}
