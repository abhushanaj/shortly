import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import CustomButton from "../custom-button/custom-button.component";

import { addNewUrl } from "../../redux/link-cart/link-cart.actions";

import "./shorting-form.styles.scss";

const ShorteningForm = ({ currentUser, addUrlInfo }) => {
  /**
   * @currentUser: {object} from redux store that stores signed in user
   * @addUrlInfo: {function} dispatch used to add new shortened URL to store
   */

  const [url, setUrl] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (url === "" || url === " ") {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
      try {
        const response = await axios.post("https://rel.ink/api/links/", {
          url: url,
        });
        addUrlInfo(response.data);
      } catch (error) {
        console.log({
          type: "Error while shortning URL",
          error,
        });
      }

      setUrl("");
    }
  };

  const borderStyle = isEmpty ? "3px solid hsl(0, 87%, 67%)" : "none";

  return (
    <div className="u-container">
      <div className="shorten-form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="white-input"
            type="text"
            placeholder="Shorten a URL here...."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setIsEmpty(false);
            }}
            name="url"
            id="url"
            style={{
              border: borderStyle,
            }}
          />

          <CustomButton type="submit">Shorten it!</CustomButton>
        </form>
        {isEmpty && <small class="error">Please add a link to shorten</small>}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUrlInfo: (urlObject) => dispatch(addNewUrl(urlObject)),
  };
};

export default connect(null, mapDispatchToProps)(ShorteningForm);
