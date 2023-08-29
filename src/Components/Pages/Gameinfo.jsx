import React from "react";
import closeIcon from "../../assets/icons/close.png";
import CustomButton from "../Common/CustomButton";
import { useNavigate } from "react-router-dom";

import "../../Styles/Gameinfo.css";

const Gameinfo = () => {
  const navigate = useNavigate();

  const buttonText = "Start";
  const buttonStyle = {
    backgroundImage:
      " linear-gradient(92.96deg, rgba(29, 29, 185, 0.6) -8.49%, #1D1DB9 130.8%)",
    width: "131px",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
    marginTop: "90%",
  };
  return (
    <>
      <div className="game-container">
        <div className="position-relative">
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
