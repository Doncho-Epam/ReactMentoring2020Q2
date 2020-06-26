import React from "react";
import PropTypes from "prop-types";
import "./button.css";

function CustomButton(props) {
  return (
    <button className="search-button" onClick={props.onClick}>
      {props.title}
    </button>
  );
}

CustomButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default CustomButton;
