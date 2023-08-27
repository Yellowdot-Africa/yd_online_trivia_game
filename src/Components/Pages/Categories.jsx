import React from "react";
import "../../Styles/Categories.css";
import CustomButton from "../Common/CustomButton";
import { useNavigate } from "react-router-dom";
// import LandingPage from "./LandingPage";
import CategoryOptions from "../Common/CategoryOptions";

const Categories = () => {
  const navigate = useNavigate();
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
        <CategoryOptions />
        <CustomButton
          buttonText={buttonText}
          style={buttonStyles}
          onClick={() => navigate("/landing-page")}
      
        />
      </div>
    </>
  );
};

export default Categories;
