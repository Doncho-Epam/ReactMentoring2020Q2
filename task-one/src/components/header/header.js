import React from "react";
import "./header.css";
import HeaderContent from "../header-content/header-content";
import MovieDetails from "../movie-details/movie-details";

function Header(props) {
  function onLogoClick() {
    props.setShowDetails(false);
  }

  return (
    <div className="main">
      <div className="blur">
        <div>
          <div className="top-header">
            <span className="logo" onClick={onLogoClick}>
              NotZamunda
            </span>
            {props.showDetails ? (
              <button className="add-movie">Search</button>
            ) : (
              <button className="add-movie">+ADD MOVIE</button>
            )}
          </div>
        </div>
        {props.showDetails ? <MovieDetails /> : <HeaderContent />}
      </div>
    </div>
  );
}

export default Header;
