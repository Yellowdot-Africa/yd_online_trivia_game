import React from "react";
import "../../Styles/LandingScreen2.css";
import logo2 from "../../assets/Images/YellowDotlogo2.png";
import HandPointDown from "../../assets/icons/handdown.svg";
import CategoryOptions from "../Common/CategoryOptions";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Common/CustomButton";
import categories from "../../assets/icons/Group 44.svg";

const LandingScreen2 = () => {
  const navigate = useNavigate();
  const buttonText = "Start Trivia";
  const buttonStyles = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.6) 0%, #1d1db9 100%)",
    boxShadow: "0px 0px 2px 0px #6b6bd1",
  };

  return (
    <>
      <div className="container ">
        <div className="landing-screen-container">
          <div className="landing-screen-header">
            <img src={logo2} alt="logo" />
          </div>

          <div className="category-tab-img">
            <div className=" category-tab-img-cont">
              <img src={categories} alt="category" />
            </div>
          </div>

          <div className="h4">
            <h4>CATEGORY </h4>
          </div>
          <div className="categories-tab-container">
            <CategoryOptions />
            <div className="hand-down">
              <img src={HandPointDown} alt="handpoint" />
            </div>

            <CustomButton
              buttonText={buttonText}
              style={buttonStyles}
              onClick={() => navigate("/game-info")}
            />
          <p className="category-tab-texxt">Start game when you are ready</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen2;
