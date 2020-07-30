import linkCartActionTypes from "./link-cart.types";

import { addNewUrl } from "./link-cart.utils";

const INITIAL_STATE = {
  linksCart: [
    {
      hashid: "Nn9y9p",
      url: "https://news.ycombinator.com/",
      created_at: "2019-06-18T21:29:57.922801Z",
    },
    {
      hashid: "Nn8y9p",
      url: "https://news.ycombinator.com/",
      created_at: "2019-06-18T21:29:57.922801Z",
    },
    {
      hashid: "Nn4y9p",
      url: "https://news.ycombinator.com/",
      created_at: "2019-06-18T21:29:57.922801Z",
    },
  ],
};

const linkCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case linkCartActionTypes.ADD_URL:
      return {
        ...state,
        linksCart: addNewUrl(state.linksCart, action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default linkCartReducer;
