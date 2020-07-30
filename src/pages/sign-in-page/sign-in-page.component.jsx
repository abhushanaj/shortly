import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  auth,
  signInWithGoogle,
  signInWithGithub,
} from "../../firebase-utils/firebase.utils";

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import workingImage from "../../asset/119-working.png";

import github from "../../asset/github.svg";
import google from "../../asset/google.svg";

import "./sign-in-page.styles.scss";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // sign-in with user email and password
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log({
        type: "Error during sign-in of user",
        error,
      });
    }
    // clear the form
    setPassword("");
    setEmail("");
  };

  return (
    <>
      <h1 className="signin-heading">Sign In to access premium services!</h1>
      <div className="u-container signin">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="img__container">
            <img src={workingImage} alt="Macbook Computer." />
          </div>

          <h2 className="sub-title">Signin using Email ID and Password</h2>

          <div className="input__group">
            <FormInput
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Enter your email..."
              handleChange={(value) => setEmail(value)}
            />
          </div>

          <div className="input__group">
            <FormInput
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Enter your password..."
              handleChange={(value) => setPassword(value)}
            />
          </div>

          <CustomButton type="submit">Sign me in!</CustomButton>

          <small>
            <Link to="/signup">Don't have an account?</Link>
          </small>

          <div className="diff__signin">
            <button
              className="signin__button"
              onClick={() => signInWithGithub()}
            >
              <img src={github} alt="Github Logo" />
            </button>
            <button
              className="signin__button"
              onClick={() => signInWithGoogle()}
            >
              <img src={google} alt="Google Logo" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInPage;
