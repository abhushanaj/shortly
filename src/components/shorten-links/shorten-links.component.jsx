import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./shorten-links.styles.scss";

const ShortenLinks = () => {
  return (
    <div className="link__box">
      <div className="original__link">
        <p>https://www.google.com</p>
      </div>
      <div className="shorten__link">
        <a
          href="https://www.rel.li/084knd"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.rel.li/084knd
        </a>
        <CustomButton squared>Copy!</CustomButton>
      </div>
    </div>
  );
};

export default ShortenLinks;
