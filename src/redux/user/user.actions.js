import userActionTypes from "./user.types";

const setCurrentUser = (user) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    info: "This action is used to set the current authenticated user",
    payload: user,
  };
};

export default setCurrentUser;
