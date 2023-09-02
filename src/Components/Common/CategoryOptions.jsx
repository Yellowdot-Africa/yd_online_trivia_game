import React from "react";
import "../../Styles/CategoryOption.css";
import CaretUp from "../../assets/icons/uiwup.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import { useNavigate } from "react-router-dom";

const CategoryOptions = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="categories-container">
        <img src={CaretUp} alt="caretup" />
        <p className="history" onClick={() => navigate("/landingscreen2")}>
          History
        </p>
        <p className="football" onClick={() => navigate("/landingscreen2")}>
          Football
        </p>
        <p className="movies" onClick={() => navigate("/landingscreen2")}>
          Movies
        </p>
        <img src={CaretDown} alt="caretdown" />
      </div>
    </>
  );
};

export default CategoryOptions;
