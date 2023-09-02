import React from "react";
import closeIcon from "../../assets/icons/close.png";
import CustomButton from "../Common/CustomButton";
import { useNavigate } from "react-router-dom";

import "../../Styles/Gameinfo.css";

const Gameinfo = () => {
  const navigate = useNavigate();

  const buttonText = "Begin";
  const buttonStyle = {
    backgroundColor: " #1D1DB9",
    width: "131px",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
    marginTop: "100%",
  };
  return (
    <>
      <div className="game-container">
        <div className="">
          <div className="close-img-cont">
            <img
              className="close-img"
              src={closeIcon}
              alt="close"
              onClick={() => navigate("/home")}
            />
          </div>
          <div className="container game-info">
            <h4>The Challenge!</h4>
            <p>Information about the game</p>

            <CustomButton
              buttonText={buttonText}
              style={buttonStyle}
              onClick={() => navigate("/loading")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gameinfo;
