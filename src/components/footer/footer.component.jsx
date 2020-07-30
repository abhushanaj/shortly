import React from "react";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="u-container footer">
        <p className="footer__line">
          Made with
          <span role="img" aria-label="Heart Emoji">
            ❤️
          </span>
          by{" "}
          <a
            className="link"
            href="http://github.com/abhu-A-J"
            target="_blank"
            rel="noopener noreferrer"
          >
            abhu-A-J
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
