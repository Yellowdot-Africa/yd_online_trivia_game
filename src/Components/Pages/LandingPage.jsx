import React, { useState, useEffect } from "react";
import "../../Styles/LandingPage.css";
import categories from "../../assets/icons/Group 44.svg";
import CustomButton from "../Common/CustomButton";
import CaretUp from "../../assets/icons/uiwup.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import HandPointUp from "../../assets/icons/handup.svg";
import logo from "../../assets/Images/ydlogo.png";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/icons/close.png";
import axios from "axios";

const LandingPage = () => {
  const navigate = useNavigate();
  const buttonText = "Start Trivia";
  const buttonStyle = {
    backgroundColor: "rgba(86, 86, 92, 0.40)",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "800",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
    borderRadius: "24px",
    width: "222px",
  };

  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    fetchCategories();
    
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

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landingScreen2");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
        <div className="landing-container">
          <div className="landing-header">
            <img src={logo} alt="logo" />
          </div>

          <div className="category-img">
            <div className="category-img-cont">
              <img src={categories} alt="category" />
            </div>
          </div>

          <div className="h4">
            <h4>CATEGORY</h4>
          </div>

          {loading ? (
            <p className="loading">Loading...</p>
          ) : error ? (
            <p className="loading">Error fetching game categories: {error}</p>
          ) : (
            <div className="categories-container">
              <img src={CaretUp} alt="caretup" />
              {categoriesData.map((category) => (
                <div className="options" key={category.id}>
                  {category.name}
                </div>
              ))}
              <img src={CaretDown} alt="caretdown" />
              <p className="category-texxt">
                Pick a category to play your first game
              </p>
              <img src={HandPointUp} alt="handpoint" />

              <CustomButton buttonText={buttonText} style={buttonStyle} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
