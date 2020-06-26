import React, { useState } from "react";
import "./header-content.css";
import CustomButton from "../shared-components/button/button";
import CustomInput from "../shared-components/input/input";

function HeaderContent() {
  function onSearch() {
    console.log(searchValue);
  }

  function onValueChange(event) {
    setSearchValue(event.target.value);
  }

  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="header-content">
      <div>
        <span className="search-label">FIND YOUR MOVIE</span>
        <div className="input-wrapper">
          <CustomInput
            onChange={onValueChange}
            value={searchValue}
            placeholder="What do you want to watch?"
            type="text"
          />
          <CustomButton
            className="search-button"
            title="SEARCH"
            onClick={onSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
