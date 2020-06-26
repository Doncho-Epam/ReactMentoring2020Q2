import React from "react";
import PropTypes from "prop-types";
import "./input.css";

function CustomInput(props) {
  return (
    <input
      type={props.type}
      className="search-input"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
}

CustomInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default CustomInput;
