import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer.js";
import { cartReducer } from "./cart/cart-reducer.js";

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
})

export default rootReducer;