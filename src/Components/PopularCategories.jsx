import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/categories/categoriesSlice";
import Play from "../assets/Icons/play.svg";
import { useNavigate } from "react-router-dom";
import "../Styles/PopularCategories.css";
import { Circles } from 'react-loader-spinner'; 

const PopularCategories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categories, isLoading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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

  const handlePlayClick = () => {
    navigate("/login-category");
  };

  return (
    <div className="categories-container" id="popularcategories">
      <div className="categories-heading">
        <h4>Popular Categories</h4>
        <p>Pick a Category to Play</p>
      </div>

      <div className="categoryy-grid">
        {Array.isArray(categories) &&
          categories.map((category) => (
            <div
              key={category.id}
              className={`category-item ${category.name.toLowerCase()}`}
            >
              <img
                src={`data:image/png;base64,${category.logo}`}
                alt={category.name}
                className="category-logo-img"
                onClick={handlePlayClick}
              />
              <h4>{category.name}</h4>
              <div className="count-container">
                <div className="play-img" onClick={handlePlayClick}>
                  <img src={Play} alt="Play" />
                </div>
                <p className="total-countt">1.2K</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularCategories;

