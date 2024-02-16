import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search-bar">
        <span className="search-icon">&#128269;</span>

        {/* <img src={SearchIcon} alt="search" /> */}
      <input
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={handleInputChange}
      />

    </div>
  );
};

export default SearchBar;
