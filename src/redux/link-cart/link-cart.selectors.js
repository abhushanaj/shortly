import { createSelector } from "reselect";

export const selectUrlCart = (state) => {
  return state.urlCart;
};

export const selectLinksCart = createSelector([selectUrlCart], (urlCart) => {
  return urlCart.linksCart;
});
