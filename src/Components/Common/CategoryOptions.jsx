import React from "react";
import "../../Styles/CategoryOption.css";
import CaretUp from "../../assets/icons/uiwup.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";

const CategoryOptions = () => {
  return (
    <>
      <div className="categories-container">
        <img src={CaretUp} alt="caretup" />
        <p className="history">History</p>
        <p className="football">Football</p>
        <p className="movies">Movies</p>
        <img src={CaretDown} alt="caretdown" />
      </div>
    </>
  );
};

export default CategoryOptions;


