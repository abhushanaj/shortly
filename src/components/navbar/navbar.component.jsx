import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import { auth } from "../../firebase-utils/firebase.utils";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import logo from "../../asset/logo.svg";

import "./navbar.styles.scss";

const Navbar = ({ history, currentUser }) => {
  return (
    <nav className="navbar u-container">
      <div className="logo-box" onClick={() => history.push("/")}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar__items">
        {!currentUser && (
          <>
            <li className="navbar__item">
              <Link to="/signin">Login</Link>
            </li>
            <li className="navbar__item">
              <CustomButton small routeTo="/signup">
                Sign Up
              </CustomButton>
            </li>
          </>
        )}

        {currentUser && (
          <>
            <li className="navbar__item">Hi! {currentUser.displayName}</li>
            <li className="navbar__item">
              <CustomButton small onClick={() => auth.signOut()}>
                Log Out
              </CustomButton>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps)(withRouter(Navbar));
