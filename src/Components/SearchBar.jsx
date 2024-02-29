import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/Icons/search.png";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filterData, setFilterData] = useState([]);

  const handleInputChange = (value) => {
    const res = filterData.filter((f) =>
      f.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(res);
    if (value === "") {
      setData([]);
    }
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setFilterData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <img src={SearchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search games..."
            // value={searchQuery}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div className="search-result">
          {loading ? (
            <p>Loading...</p>
          ) : (
            data.map((d, i) => <div key={i}>{d.name}</div>)
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
