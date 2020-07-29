import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { auth, createProfileDocument } from "./firebase-utils/firebase.utils";

import Navbar from "./components/navbar/navbar.component";

import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";

import setCurrentUser from "./redux/user/user.actions";

import "./App.scss";

function App() {
  useEffect(() => {
    console.log("Running effect!!");

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // user is signed in
      if (user) {
        const userDetails = await createProfileDocument(user);
        setCurrentUser(userDetails);
      } else {
        // user is not siggned in

        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route />
      </Switch>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};
export default connect(null, mapDispatchToProps)(App);
