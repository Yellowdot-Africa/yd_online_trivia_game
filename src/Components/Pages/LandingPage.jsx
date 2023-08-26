import React from "react";
import "../../Styles/LandingPage.css";
import categories from "../../assets/icons/Group 44.svg";
import CustomButton from "../Common/CustomButton";
import HandPointUp from "../../assets/icons/handup.svg";
import CategoryOptions from "../Common/CategoryOptions";
import logo from "../../assets/Images/ydlogo.png";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const navigate = useNavigate();

  const buttonText = "Start Trivia";
  const buttonStyle = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.24) 0%, rgba(29, 29, 185, 0.40) 100%)",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
  };
  return (
    <>
      <div className="container positive-relative">
        <div className="landing-container">
        <div className="landing-header">
          <img src={logo} alt="logo" />
        </div>

        <div className="category-img">
          <div className=" category-img-cont">
            <img src={categories} alt="category" />
          </div>
        </div>

        <div className="h4">
          <h4>CATEGORY </h4>
        </div>
        <div className="categories-container">
          <CategoryOptions />
          <img src={HandPointUp} alt="handpoint" />
          <p className="category-texxt">
            Pick a category to play your first game
          </p>

          <CustomButton buttonText={buttonText} style={buttonStyle}   onClick={() => navigate("/game-info")} />
        </div>
      </div>
      </div>
    </>
  );
};

export default LandingPage;
