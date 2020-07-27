import React from "react";
import { withRouter } from "react-router-dom";

import "./custom-button.styles.scss";

const CustomButton = ({ children, rounded, small, routeTo, history }) => {
  return (
    <button
      onClick={() => history.push(routeTo)}
      className={`btn 
    ${rounded ? "btn-rounded" : ""}
    ${small ? "btn-small" : ""}`}
    >
      {children}
    </button>
  );
};

export default withRouter(CustomButton);
