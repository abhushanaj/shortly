import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import illustration from "../../asset/illustration-working.svg";

import "./herobox.styles.scss";

const Herobox = () => {
  return (
    <header className="header">
      <div className="herobox u-container">
        <div className="herobox__content">
          <h1 className="main-heading">More than just shorter links</h1>
          <p className="tagline">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <CustomButton rounded>Get Started</CustomButton>
        </div>
        <div className="herobox__image">
          <img src={illustration} alt="Illustration" />
        </div>
      </div>
    </header>
  );
};

export default Herobox;
