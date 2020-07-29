import React from "react";

import { connect } from "react-redux";

import Herobox from "../../components/herobox/herobox.component";
import LinksDisplayBox from "../../components/link-display-box/link-display-box.component";
import ShorteningForm from "../../components/shortning-form/shortning-form.component";

import "./homepage.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const HomePage = ({ currentUser }) => {
  return (
    <>
      <Herobox />
      {currentUser && (
        <>
          <ShorteningForm />
          <div className="information__section">
            <LinksDisplayBox displayName={currentUser.displayName} />
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps)(HomePage);
