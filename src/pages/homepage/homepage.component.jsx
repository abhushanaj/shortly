import React from "react";

import Herobox from "../../components/herobox/herobox.component";
import LinksDisplayBox from "../../components/link-display-box/link-display-box.component";
import ShorteningForm from "../../components/shortning-form/shortning-form.component";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <>
      <Herobox />
      <ShorteningForm />
      <div className="information__section">
        <LinksDisplayBox />
      </div>
    </>
  );
};

export default HomePage;
