import React from "react";
import { connect } from "react-redux";

import ShortenLinks from "../shorten-links/shorten-links.component";

import { selectLinksCart } from "../../redux/link-cart/link-cart.selectors";
import { clearUrlCart } from "../../redux/link-cart/link-cart.actions";

import deleteIcon from "../../asset/delete.svg";

import "./link-display-box.styles.scss";

const LinksDisplayBox = ({ displayName, linksCart, clearUrlCart }) => {
  return (
    <div className="link__display u-container">
      <h2 className="title">
        Hi! {displayName}. Here's your list for shorten URL's.
      </h2>
      <div className="delete-icon" onClick={() => clearUrlCart()}>
        <img src={deleteIcon} alt="Delete Trash Can" />
        <small className="message">Clear all!</small>
      </div>
      {linksCart.map((item) => (
        <ShortenLinks key={item.hashid} {...item} />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearUrlCart: () => dispatch(clearUrlCart()),
  };
};
const mapStateToProps = (state) => {
  return {
    linksCart: selectLinksCart(state),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LinksDisplayBox);
