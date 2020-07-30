import React from "react";
import { connect } from "react-redux";

import ShortenLinks from "../shorten-links/shorten-links.component";

import { selectLinksCart } from "../../redux/link-cart/link-cart.selectors";

import "./link-display-box.styles.scss";

const LinksDisplayBox = ({ displayName, linksCart }) => {
  return (
    <div className="link__display u-container">
      <h2 className="title">
        Hi! {displayName}. Here's your list for shorten URL's.
      </h2>
      {linksCart.map((item) => (
        <ShortenLinks key={item.hashid} {...item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    linksCart: selectLinksCart(state),
  };
};
export default connect(mapStateToProps)(LinksDisplayBox);
