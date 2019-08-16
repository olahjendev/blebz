import React from "react";
import "./SearchBox.css";

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2 dim">
      <input
        className="input-box"
        type="search"
        placeholder="Search.."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
