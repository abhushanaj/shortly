import React, { useState } from "react";

import "./shorting-form.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const ShorteningForm = () => {
  const [url, setUrl] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url === "" || url === " ") {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
      alert("Send a dispatch to shorten URL");
      setUrl("");
    }
  };

  const borderStyle = isEmpty ? "3px solid hsl(0, 87%, 67%)" : "none";

  return (
    <div className="u-container">
      <div className="shorten-form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Shorten a URL here...."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setIsEmpty(false);
            }}
            name="url"
            id="url"
            style={{
              border: borderStyle,
            }}
          />

          <CustomButton type="submit">Shorten it!</CustomButton>
        </form>
        {isEmpty && <small class="error">Please add a link to shorten</small>}
      </div>
    </div>
  );
};

export default ShorteningForm;
