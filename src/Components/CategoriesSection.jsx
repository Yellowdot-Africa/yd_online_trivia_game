import React, { useState, useEffect } from "react";
import Play from "../assets/Icons/play.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/CategoriesSection.css";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const token = sessionStorage.getItem("token");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


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
      console.log(category.logo);

      if (response.data.data.length > 0) {
        setSelectedCategoryIndex(0);
        setSelectedCategory(response.data.data[0]);
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleCategoryClick = () => {
    navigate("/question-pack");
  };

  return (
    <div className="category-container">
      <div className="category-heading">
        <h4>Popular Categories</h4>
        <p>We know how wide your interests are...</p>
      </div>

      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-item" key={category.id}>
            <img
              className="category-images"
              src={`data:image/png;base64,${category.logo}`}
              alt={category.name}
              onClick={() => handleCategoryClick(category.id)}

            />
            <h4>{category.name}</h4>
            <div className="play-cont">
              <div className="play">
                <img src={Play} alt="" />
              </div>
              {/* <p className="play-no">{category.playCount}</p> */}
              <p className="play-no">1.2K</p>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more">
        <a href="#">Load More</a>
      </div>
    </div>
  );
};

export default CategoriesSection;






