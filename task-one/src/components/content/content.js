import React from "react";
import "./content.css";
import Card from "../shared-components/movie-card/card";

function Content() {
  return (
    <div className="main-list">
      <div className="filters">
        <div>
          <span className="genres">ALL</span>
          <span className="genres">DOCUMENTARY</span>
          <span className="genres">COMEDY</span>
          <span className="genres">HORROR</span>
          <span className="genres">CRIME</span>
        </div>
        <div className="sortby">
          <span className="sortby-span">Sort by:</span>
          <select name="sortBy" className="sort">
            <option value="releaseDate">Release Date</option>
            <option value="year">Year</option>
            <option value="name">Name</option>
            <option value="genre">Genre</option>
          </select>
        </div>
      </div>
      <hr className="filters-hr"></hr>
      <span className="movie-count">39 Movies Found</span>
      <div className="movie-list">
        <Card
          image="https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"
          name="Fast & Furious"
          genre="Action"
          year="2009"
        />
        <Card
          image="https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"
          name="Fast & Furious"
          genre="Action"
          year="2009"
        />{" "}
        <Card
          image="https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"
          name="Fast & Furious"
          genre="Action"
          year="2009"
        />
        <Card
          image="https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"
          name="Fast & Furious"
          genre="Action"
          year="2009"
        />
        <Card
          image="https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"
          name="Fast & Furious"
          genre="Action"
          year="2009"
        />
        <Card
          image="https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"
          name="Fast & Furious"
          genre="Action"
          year="2009"
        />
        <Card
          image="https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"
          name="Fast & Furious"
          genre="Action"
          year="2009"
        />
        <Card
          image="https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"
          name="Fast & Furious"
          genre="Action"
          year="2009"
        />
      </div>
    </div>
  );
}

export default Content;
