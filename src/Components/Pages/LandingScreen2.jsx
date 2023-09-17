import React, { useState, useEffect } from "react";
import "../../Styles/LandingScreen2.css";
import logo2 from "../../assets/Images/YellowDotlogo2.png";
import HandPointDown from "../../assets/icons/handdown.svg";
import { useNavigate } from "react-router-dom";
import CaretUp from "../../assets/icons/uiwup.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import CustomButton from "../Common/CustomButton";
import categories from "../../assets/icons/Group 44.svg";
import closeIcon from "../../assets/icons/close.png";
import axios from "axios";

const LandingScreen2 = () => {
  const navigate = useNavigate();
  const buttonText = "Start Trivia";
  const buttonStyles = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.6) 0%, #1d1db9 100%)",
    boxShadow: "0px 0px 2px 0px #6b6bd1",
  };

  const [showHandPoint, setShowHandPoint] = useState(true);
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    fetchCategories();
    const timer = setTimeout(() => {
      setShowHandPoint(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/GameCategory/GetCategories",
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (Array.isArray(response.data.data)) {
        setCategoriesData(response.data.data);
        setLoading(false);
      } else {
        console.error("Invalid response format:", response);
        setLoading(false);
        setError("Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="close-img-cont">
          <img
            className="close-img"
            src={closeIcon}
            alt="close"
            onClick={() => navigate("/home")}
          />
        </div>
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
            {loading ? (
              <p className="loading">Loading...</p>
            ) : error ? (
              <p className="loading">Error fetching game categories: {error}</p>
            ) : (
              <>
              <div className="categories-containerr">
                <img src={CaretUp} alt="caretup" />

                {categoriesData.map((category) => (
                  <div className="category-option" key={category.id}>
                    {category.name}
                  </div>
                ))}
                <img src={CaretDown} alt="caretdown" />
                </div>
              </>
            )}
            {showHandPoint && (
              <div className="hand-down">
                <img src={HandPointDown} alt="handpoint" />
              </div>
            )}

            <CustomButton
              buttonText={buttonText}
              style={buttonStyles}
              onClick={() => navigate("/game-info")}
            />
            <p className="category-tab-texxt">
              Start the game when you are ready
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen2;
