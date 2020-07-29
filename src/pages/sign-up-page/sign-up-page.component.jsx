import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  auth,
  createProfileDocument,
} from "../../firebase-utils/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import signup from "../../asset/signup.png";

import "./sign-up-page.styles.scss";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    // if password match, then sign-up user
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createProfileDocument(user, { displayName });
    } catch (error) {
      console.log({
        type: "Error while sign-up with email and password",
        error,
      });
    }

    // reset the form
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <h1 className="signup-heading">Sign Up to use our services!</h1>
      <div className="u-container signin">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="img__container">
            <img src={signup} alt="Macbook Computer." />
          </div>

          <h2 className="sub-title signup-title">
            Signup using Email ID and Password
          </h2>

          <div className="input__group">
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              id="displayName"
              placeholder="Enter your name..."
              handleChange={(value) => setDisplayName(value)}
              required
            />
          </div>

          <div className="input__group">
            <FormInput
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Enter your email..."
              handleChange={(value) => setEmail(value)}
              required
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
              required
            />
          </div>

          <div className="input__group">
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              id="confirmPassword"
              placeholder="Confirm your password..."
              handleChange={(value) => setConfirmPassword(value)}
              required
            />
          </div>

          <CustomButton type="submit">Sign me up!</CustomButton>

          <small>
            <Link to="/signin">Already have an account?</Link>
          </small>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
