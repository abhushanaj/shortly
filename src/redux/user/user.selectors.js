import { createSelector } from "reselect";

export const selectUser = (state) => {
  return state.user;
};

export const selectCurrentUser = createSelector([selectUser], (user) => {
  return user.currentUser;
});
