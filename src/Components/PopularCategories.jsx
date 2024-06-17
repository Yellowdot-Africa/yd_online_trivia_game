import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/categories/categoriesSlice";
import Play from "../assets/Icons/play.svg";
import "../Styles/PopularCategories.css";

const PopularCategories = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="categories-container">
      <div className="categories-heading">
        <h4>Popular Categories</h4>
        <p>We know how wide your interests are...</p>
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
              />
              <h4>{category.name}</h4>
              <div className="count-container">
                <div className="play-img">
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
