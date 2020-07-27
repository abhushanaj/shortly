import React from "react";
import { Link, withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import logo from "../../asset/logo.svg";

import "./navbar.styles.scss";

const isloggedIn = false;

const Navbar = ({ history }) => {
  return (
    <nav className="navbar u-container">
      <div className="logo-box" onClick={() => history.push("/")}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar__items">
        {!isloggedIn && (
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

        {isloggedIn && (
          <>
            <li className="navbar__item">Hi! Abhushan</li>
            <li className="navbar__item">
              <CustomButton small>Log Out</CustomButton>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default withRouter(Navbar);
