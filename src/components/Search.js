import React from "react";

function Search({handleSearchInput, searchPlant}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchInput}
        value = {searchPlant}
      />
    </div>
  );
}

export default Search;
