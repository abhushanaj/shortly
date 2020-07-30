import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import linkCartReducer from "./link-cart/link-cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["urlCart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  urlCart: linkCartReducer,
});

export default persistReducer(persistConfig, rootReducer);
