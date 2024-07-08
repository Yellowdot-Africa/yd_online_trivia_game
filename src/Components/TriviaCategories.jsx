import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  selectCategory,
} from "../features/categories/categoriesSlice";
import "../Styles/TriviaCategories.css";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const TriviaCategories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categories, isLoading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
    navigate("/getting-started");
  };

  if (isLoading) {
    return (
      <div className="category-spinner-container">
        <Circles color="#D9D9D9" height={30} width={30} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="category-container">
        <div className="category-heading">
          <h4>Trivia Categories</h4>
          <p>We know how wide your interests are...</p>
        </div>

        <div className="category-grid">
          {Array.isArray(categories) &&
            categories.map((category) => (
              <div
                key={category.id}
                className={`category-item ${category.name.toLowerCase()}`}
              >
                <img
                  className="category-images"
                  src={`data:image/png;base64,${category.logo}`}
                  alt={category.name}
                />
                <div className="category-details">
                  <div className="countt-container">
                    <h4>{category.name}</h4>
                    <p className="total-count">1.2K</p>
                  </div>
                  <button
                    className="play-btn"
                    onClick={() => handleCategoryClick(category)}
                  >
                    Play
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TriviaCategories;





