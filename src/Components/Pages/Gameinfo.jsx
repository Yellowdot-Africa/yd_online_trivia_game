import React, { useState, useEffect } from "react";
import closeIcon from "../../assets/icons/close.png";
import CustomButton from "../Common/CustomButton";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "../../Styles/Gameinfo.css";

const Gameinfo = ({ gameId }) => {
  const [gameInfo, setGameInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = sessionStorage.getItem("token");

  const buttonText = "Begin";
  const buttonStyle = {
    backgroundColor: " #1D1DB9",
    width: "131px",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
    marginTop: "100%",
  };
  const navigate = useNavigate();
  const location = useLocation();
  const category = location?.state?.category;

  console.log("gameInfo", category);
  console.log(category);

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
            {category ? (
              <>
                <h4>{category.name}</h4>
                <p>{category.description}</p>
              </>
            ) : (
              <p>Loading game information...</p>
            )}
            <CustomButton
              buttonText={buttonText}
              style={buttonStyle}
              onClick={() =>
                navigate("/loading", {
                  state: {
                    category:category,
                  },
                })
              }
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default Gameinfo;


