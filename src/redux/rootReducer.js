import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import linkCartReducer from "./link-cart/link-cart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  urlCart: linkCartReducer,
});

export default rootReducer;
