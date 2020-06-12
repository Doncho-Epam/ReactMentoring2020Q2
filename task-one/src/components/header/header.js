import React from "react";
import "./header.css";
import HeaderContent from "../header-content/header-content";

function Header() {
  return (
    <div className="main">
      <div className="blur">
        <div>
          <div className="top-header">
            <span className="logo">NotZamunda</span>
            <button className="add-movie">+ADD MOVIE</button>
          </div>
        </div>
        <HeaderContent />
      </div>
    </div>
  );
}

export default Header;
