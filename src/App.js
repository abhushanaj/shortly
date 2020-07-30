import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { auth, createProfileDocument } from "./firebase-utils/firebase.utils";

import Navbar from "./components/navbar/navbar.component";

import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";

import setCurrentUser from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.scss";

function App({ setCurrentUser, currentUser }) {
  useEffect(
    () => {
      const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
        // user is signed in
        if (userAuth) {
          const userDetails = await createProfileDocument(userAuth);

          userDetails.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        } else {
          // user is not siggned in
          setCurrentUser(null);
        }
      });

      return () => {
        unsubscribe();
      };
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/signin"
          render={() => {
            return currentUser ? <Redirect to="/" /> : <SignInPage />;
          }}
        />

        <Route
          exact
          path="/signup"
          render={() => {
            return currentUser ? <Redirect to="/" /> : <SignUpPage />;
          }}
        />
      </Switch>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
