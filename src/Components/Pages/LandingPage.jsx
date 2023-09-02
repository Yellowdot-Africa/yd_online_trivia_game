import React from "react";
import "../../Styles/LandingPage.css";
import categories from "../../assets/icons/Group 44.svg";
import CustomButton from "../Common/CustomButton";
import HandPointUp from "../../assets/icons/handup.svg";
import CategoryOptions from "../Common/CategoryOptions";
import logo from "../../assets/Images/ydlogo.png";

const LandingPage = () => {
  const buttonText = "Start Trivia";
  const buttonStyle = {
    backgroundColor: "rgba(86, 86, 92, 0.40)",
    color: " #FFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "800",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
    borderRadius: "24px",
    width: "222px",
  };

  return (
    <>
      <div className="container ">
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

            <CustomButton buttonText={buttonText} style={buttonStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
