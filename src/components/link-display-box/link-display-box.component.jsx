import React from "react";

import ShortenLinks from "../shorten-links/shorten-links.component";

import "./link-display-box.styles.scss";

const LinksDisplayBox = () => {
  return (
    <div className="link__display u-container">
      <h2 className="title">
        Hi! Abhushan. Here's your list for shorten URL's.
      </h2>
      <ShortenLinks />
      <ShortenLinks />
      <ShortenLinks />
    </div>
  );
};

export default LinksDisplayBox;