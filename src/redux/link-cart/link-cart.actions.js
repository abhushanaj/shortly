import linkCartActionTypes from "./link-cart.types";

export const addNewUrl = (urlInfoObject) => {
  return {
    type: linkCartActionTypes.ADD_URL,
    info: "This action is used to add the new shortened url to the lists",
    payload: urlInfoObject,
  };
};
