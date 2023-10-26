import React, { useState, useEffect } from "react";
import "../../Styles/LandingScreen2.css";
import logo2 from "../../assets/Images/YellowDotlogo2.png";
import HandPointDown from "../../assets/icons/handdown.svg";
import { useNavigate } from "react-router-dom";
import CaretUp from "../../assets/icons/uiwup.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import CustomButton from "../Common/CustomButton";
import categories from "../../assets/icons/Group 44.svg";
import Spinner from "react-bootstrap/Spinner";
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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
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

        if (response.data.data.length > 0) {
          setSelectedCategoryIndex(0);
          setSelectedCategory(response.data.data[0]);
        }

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

  const handleCategorySelect = (index, category) => {
    setSelectedCategoryIndex(index);
    setSelectedCategory(category);
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
            <div className="category-tab-img-cont">
              <img src={categories} alt="category" />
            </div>
          </div>

          <div className="h4">
            <h4>CATEGORIES </h4>
          </div>
          <div className="categories-tab-container">
            {loading ? (
              <div className="loading-spinner-container">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : error ? (
              <p className="loading">Error fetching game categories: {error}</p>
            ) : (
              <>
                <div className="categories-containerr">
                  <img
                    className="caret up"
                    src={CaretUp}
                    alt="caretup"
                    onClick={() => {
                      const newIndex =
                        selectedCategoryIndex > 0
                          ? selectedCategoryIndex - 1
                          : categoriesData.length - 1;
                      handleCategorySelect(newIndex, categoriesData[newIndex]);
                    }}
                  />

                  {categoriesData.map((category, index) => (
                    <div
                      className={`option ${
                        selectedCategoryIndex === index ? "selected" : ""
                      }`}
                      key={category.id}
                      onClick={() => handleCategorySelect(index, category)}
                    >
                      {category.name}
                    </div>
                  ))}

                  <img
                    className="caret down"
                    src={CaretDown}
                    alt="caretdown"
                    onClick={() => {
                      const newIndex =
                        selectedCategoryIndex < categoriesData.length - 1
                          ? selectedCategoryIndex + 1
                          : 0;
                      handleCategorySelect(newIndex, categoriesData[newIndex]);
                    }}
                  />
                </div>
              </>
            )}

            {showHandPoint && (
              <div className="hand-down">
                <img src={HandPointDown} alt="handpoint" />
              </div>
            )}

            {!loading && (
              <CustomButton
                buttonText={buttonText}
                style={buttonStyles}
                onClick={() =>
                  navigate("/game-info", {
                    state: {
                      category: selectedCategory,
                    },
                  })
                }
              />
            )}

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
