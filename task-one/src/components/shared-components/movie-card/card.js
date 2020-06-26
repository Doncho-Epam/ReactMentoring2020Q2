import React from "react";
import PropTypes from "prop-types";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div>
        <img className="image" src={props.image} onClick={props.onClick}></img>
      </div>
      <div className="movie-info">
        <div className="basic-info">
          <div className="name">{props.name}</div>
          <div className="genre"> {props.genre}</div>
        </div>
        <div className="year">{props.year}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string
};

export default Card;
