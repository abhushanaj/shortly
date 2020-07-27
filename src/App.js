import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";

import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";

import "./App.scss";

function App() {
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

export default App;
