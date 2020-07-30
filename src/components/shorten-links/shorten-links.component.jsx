import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./shorten-links.styles.scss";

const ShortenLinks = ({ hashid, url }) => {
  return (
    <div className="link__box">
      <div className="original__link">
        <p>{url}</p>
      </div>
      <div className="shorten__link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {`https://rel.ink/api/links/${hashid}`}
        </a>
        <CustomButton squared>Copy!</CustomButton>
      </div>
    </div>
  );
};

export default ShortenLinks;
