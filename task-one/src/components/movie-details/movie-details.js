import React from "react";
import "./movie-details.css";

function MovieDetails() {
  return (
    <div className="movie-details-wrapper">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"
        alt="image"
        className="details-image"
      />
      <div className="details-container">
        <h1 className="details-heading">Fast & Furious</h1>
        <h1 className="details-rating">0.1</h1>
        <h3 className="details-genre">Action</h3>
        <h2 className="details-year">2009</h2>
        <h2 className="details-duration">95 min</h2>
        <h3 className="details-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          aliquid nisi exercitationem id illum nam ut tenetur et rerum! Nostrum
          perspiciatis laudantium saepe itaque iure perferendis delectus vero et
          odio.
        </h3>
      </div>
    </div>
  );
}

export default MovieDetails;
