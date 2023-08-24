import React from "react";
import "../../Styles/Categories.css";
import CaretUp from "../../assets/icons/uiwup.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import CustomButton from "./CustomButton";

const Categories = () => {
  const buttonText = "Start Trivia";
  const buttonStyles = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.6) 0%, #1d1db9 100%)",
    boxShadow: "0px 0px 2px 0px #6b6bd1",
  };

  return (
    <>
      <div>
        <h4>CATEGORIES </h4>
      </div>
      <div className="categories-container">
        <img src={CaretUp} alt="caretup" />
        <p className="history">History</p>
        <p className="football">Football</p>
        <p className="movies">Movies</p>
        <img src={CaretDown} alt="caretdown" />
        <CustomButton buttonText={buttonText} style={buttonStyles} />
      </div>
    </>
  );
};

export default Categories;
