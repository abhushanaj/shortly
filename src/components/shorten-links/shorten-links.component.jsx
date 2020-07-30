import React from "react";

import "./shorten-links.styles.scss";

const ShortenLinks = ({ hashid, url }) => {
  const copyToClipboard = () => {
    const range = document.createRange();
    range.selectNode(document.getElementById(hashid));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };

  return (
    <div className="link__box">
      <div className="original__link">
        <p>{url}</p>
      </div>
      <div className="shorten__link">
        <a href={url} target="_blank" rel="noopener noreferrer" id={hashid}>
          {`https://rel.ink/api/links/${hashid}`}
        </a>
        <button className="btn btn-square" onClick={copyToClipboard}>
          Copy!
        </button>
      </div>
    </div>
  );
};

export default ShortenLinks;
