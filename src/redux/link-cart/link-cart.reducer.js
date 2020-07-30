import linkCartActionTypes from "./link-cart.types";

import { addNewUrl } from "./link-cart.utils";

const INITIAL_STATE = {
  linksCart: [],
};

const linkCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case linkCartActionTypes.ADD_URL:
      return {
        ...state,
        linksCart: addNewUrl(state.linksCart, action.payload),
      };
    case linkCartActionTypes.CLEAR_URL_CART:
      return {
        ...state,
        linksCart: [],
      };
    default:
      return state;
  }
};

export default linkCartReducer;
