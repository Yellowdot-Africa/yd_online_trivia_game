import React, { useState, useEffect } from "react";
import "../../Styles/LandingPage.css";
import categories from "../../assets/icons/Group 44.svg";
import CustomButton from "../Common/CustomButton";
import CaretUp from "../../assets/icons/uiwup.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import HandPointUp from "../../assets/icons/handup.svg";
import DesktopImg1 from "../../assets/Images/Ellipse1.png";
import DesktopImg2 from "../../assets/Images/Ellipse2.png";
import DesktopImg3 from "../../assets/Images/Ellipse3.svg";
import logoDesktop from "../../assets/Images/YellowDotTrivia.png";
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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
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

  const handleCategorySelect = (index) => {
    setSelectedCategoryIndex(index);
    setSelectedCategory(category);

  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landingScreen2");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <div className="landing-desktop-images">
        <img className="img1" src={DesktopImg1} alt="Desktop-Image-1" />
        <img className="img2" src={DesktopImg2} alt="Desktop-Image-2" />
        <img className="img3" src={DesktopImg3} alt="Desktop-Image-3" />
      </div>
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
          <img className="mobile-logo" src={logo} alt="logo" />
          <img className="desktop-logo" src={logoDesktop} alt="logo-desktop" />
        </div>

        <div className="category-img">
          <div className="category-img-cont">
            <img src={categories} alt="category" />
          </div>
        </div>

        <div className="h4">
          <h4>CATEGORIES</h4>
        </div>

        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="loading">Error fetching game categories: {error}</p>
        ) : (
          <div className="categories-container">
            <img
              className="caret up"
              src={CaretUp}
              alt="caretup"
              onClick={() => {
                const newIndex =
                  selectedCategoryIndex > 0
                    ? selectedCategoryIndex - 1
                    : categoriesData.length - 1;
                handleCategorySelect(newIndex);
              }}
            />
            <div className="category-options">
              {categoriesData.map((category, index) => (
                <div
                  className={`option ${
                    selectedCategoryIndex === index ? "selected" : ""
                  }`}
                  key={category.id}
                  onClick={() => handleCategorySelect(index)}
                >
                  {category.name}
                </div>
              ))}
            </div>
            <img
              className="caret down"
              src={CaretDown}
              alt="caretdown"
              onClick={() => {
                const newIndex =
                  selectedCategoryIndex < categoriesData.length - 1
                    ? selectedCategoryIndex + 1
                    : 0;
                handleCategorySelect(newIndex);
              }}
            />
            <p className="category-texxt">
              Pick a category to play your first game
            </p>
            <img src={HandPointUp} alt="handpoint" />

            <CustomButton buttonText={buttonText} style={buttonStyle} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
