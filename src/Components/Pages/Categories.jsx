import React, { useState, useEffect } from "react";
import "../../Styles/Categories.css";
import CaretUp from "../../assets/icons/uiwup.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import CustomButton from "../Common/CustomButton";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const navigate = useNavigate();
  const buttonText = "Start Trivia";
  const buttonStyles = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.6) 0%, #1d1db9 100%)",
    boxShadow: "0px 0px 2px 0px #6b6bd1",
    width: "222px",
  };

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const token = sessionStorage.getItem("token");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchGameCategories();
  }, []);

  const fetchGameCategories = async () => {
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

      setCategories(response.data.data);

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleCategorySelect = (index, category) => {
    setSelectedCategoryIndex(index);
    setSelectedCategory(category);
  };

  return (
    <div>
      <h4>CATEGORIES</h4>
      {loading ? (
        <div className="loading-spinner-container">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <p className="loading">Error fetching game categories: {error}</p>
      ) : categories.length === 0 ? (
        <p>No categories available.</p>
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
                  : categories.length - 1;
              handleCategorySelect(newIndex);
            }}
          />
          <div className="category-options">
            {categories.map((category, index) => (
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
          </div>
          <img
            className="caret down"
            src={CaretDown}
            alt="caretdown"
            onClick={() => {
              const newIndex =
                selectedCategoryIndex < categories.length - 1
                  ? selectedCategoryIndex + 1
                  : 0;
              handleCategorySelect(newIndex);
            }}
          />
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
          {/* <div></div> */}
        </div>
      )}
    </div>
  );
};

export default Categories;
