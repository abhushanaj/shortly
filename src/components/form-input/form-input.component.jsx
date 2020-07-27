import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, value, ...otherProps }) => {
  return (
    <input
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      {...otherProps}
    />
  );
};

export default FormInput;
